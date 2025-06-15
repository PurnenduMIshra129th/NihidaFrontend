import { useEffect, useState } from "react";

import { eventBus } from "../contexts/context/eventBus";
import { apiClient } from "../services/axiosInstance";
import { IErrorResponse, ISuccessResponse } from "../types/api/centralApi.types";
import { getStorageItem } from "../utils/util";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

const useFetch = <T,>(endpoint: string, method: HttpMethod = "GET", payload?: { [key: string]: string }, tokenization: boolean = false) => {
  const [data, setData] = useState<ISuccessResponse<T> | IErrorResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      eventBus.emit({ type: "loader_start", message: "Loading..." });

      const headers = tokenization
        ? { Authorization: `Bearer ${getStorageItem("token")?.toString()}` }
        : {};

      const response = await apiClient.request<T>({
        url: endpoint,
        method,
        data: payload,
        headers
      });
      if ((response?.data as IErrorResponse)?.statusCode === 0) {
        const errorValue = (response?.data as IErrorResponse)?.error;
        const errorMessage = typeof errorValue === "string" ? errorValue : (response?.data as IErrorResponse)?.shortHand;
        eventBus.emit({ type: "warning", message: errorMessage });
        setData((response?.data as IErrorResponse));
      }
      if ((response?.data as ISuccessResponse<T>)?.statusCode === 1) {
        setData((response?.data as ISuccessResponse<T>));
      }
    } catch (err) {
      const fallbackError: IErrorResponse = {
        statusCode: 0,
        errorCode: 500,
        errorMessage: "Unexpected error occurred!",
        shortHand: "SERVER_ERROR",
        error: String(error),
      };
      eventBus.emit({ type: "danger", message: fallbackError.error });
      setError(err instanceof Error ? err : new Error("Unknown error occurred"));
    } finally {
      setIsLoading(false);
      eventBus.emit({ type: "loader_stop", message: "Loading..." });
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint, method, payload]);

  return { data, error, isLoading, fetchData };
};

export default useFetch;