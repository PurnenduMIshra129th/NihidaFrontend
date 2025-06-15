import { AxiosRequestConfig } from "axios";

import { eventBus } from "../contexts/context/eventBus";
import { apiClient, multipartApiClient } from "../services/axiosInstance";
import { IErrorResponse, ISuccessResponse } from "../types/api/centralApi.types";
import { getStorageItem } from "../utils/util";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export const apiRequest = async <T>(
  endpoint: string,
  method: HttpMethod = "GET",
  payload?: { [key: string]: string },
  tokenization: boolean = false
): Promise<ISuccessResponse<T> | IErrorResponse> => {
  try {
    eventBus.emit({ type: "loader_start", message: "Loading..." });

    const headers = tokenization
      ? { Authorization: `Bearer ${getStorageItem("token")?.toString()}` }
      : {};

    const response = await apiClient.request<ISuccessResponse<T> | IErrorResponse>({
      url: endpoint,
      method,
      data: payload,
      headers
    });

    if (response?.data?.statusCode === 1) {
      eventBus.emit({ type: "success", message: response.data.message });
      return response.data as ISuccessResponse<T>;
    }

    if (response?.data?.statusCode === 0) {
      const errorValue = (response?.data as IErrorResponse)?.error;
      const errorMessage = typeof errorValue === "string" ? errorValue : (response?.data as IErrorResponse)?.shortHand;
      eventBus.emit({ type: "warning", message: errorMessage });
      return response.data as IErrorResponse;
    }
    const unknownError: IErrorResponse = {
      statusCode: 0,
      errorCode: 400,
      errorMessage: "Unexpected response received!",
      shortHand: "UNKNOWN_ERROR",
      error: JSON.stringify(response.data),
    };
    eventBus.emit({ type: "danger", message: unknownError.shortHand });
    return unknownError;

  } catch (error) {
    const fallbackError: IErrorResponse = {
      statusCode: 0,
      errorCode: 500,
      errorMessage: "Unexpected error occurred!",
      shortHand: "SERVER_ERROR",
      error: String(error),
    };
    eventBus.emit({ type: "danger", message: fallbackError.error });
    return fallbackError;
  } finally {
    eventBus.emit({ type: "loader_stop", message: "Loading stop..." });
  }
};

export const multiPartAPI = async <T>(endpoint: string, formData: FormData, tokenization: boolean = false): Promise<ISuccessResponse<T> | IErrorResponse> => {
  try {
    eventBus.emit({ type: "loader_start", message: "Loading..." });

    const headers = tokenization
      ? { Authorization: `Bearer ${getStorageItem("token")?.toString()}` }
      : {};

    const config: AxiosRequestConfig<FormData> = {
      headers,
    };

    const response = await multipartApiClient.post(endpoint, formData, config);

    if (response?.data?.statusCode === 1) {
      eventBus.emit({ type: "success", message: response.data.message });
      return response.data as ISuccessResponse<T>;
    }
    if (response?.data?.statusCode === 0) {
      eventBus.emit({ type: "warning", message: response.data.shortHand });
      return response.data as IErrorResponse;
    }
    const unknownError: IErrorResponse = {
      statusCode: 0,
      errorCode: 400,
      errorMessage: "Unexpected response received!",
      shortHand: "UNKNOWN_ERROR",
      error: JSON.stringify(response.data),
    };

    eventBus.emit({ type: "danger", message: unknownError.shortHand });
    return unknownError;
  } catch (error) {
    const fallbackError: IErrorResponse = {
      statusCode: 0,
      errorCode: 500,
      errorMessage: "Unexpected error occurred!",
      shortHand: "SERVER_ERROR",
      error: String(error),
    };
    eventBus.emit({ type: "danger", message: fallbackError.error });
    return fallbackError;
  }
  finally {
    eventBus.emit({ type: "loader_stop", message: "Loading stop..." });
  }
};