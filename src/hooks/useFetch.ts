import { useEffect, useState } from "react";

import {apiClient} from "../services/axiosInstance";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

const useFetch = <T,>(endpoint: string, method: HttpMethod = "GET", payload?: { [key: string]: string }) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await apiClient.request<T>({
        url: endpoint,
        method,
        data: payload,
      });      
      setData(response.data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error occurred"));
    } finally {
      setIsLoading(false);
    }
  };

   useEffect(() => {
    fetchData();
  }, [endpoint, method, payload]);

  return { data, error, isLoading, fetchData };
};

export default useFetch;