import { AxiosRequestConfig } from "axios";

import { eventBus } from "../contexts/context/eventBus";
import { apiClient, multipartApiClient } from "../services/axiosInstance";
import { IErrorResponse, ISuccessResponse } from "../types/api/api.type";
import { handleApiError } from "../utils/handleApiError";
import { getNavigator } from "../utils/navigator";
import { getStorageItem, validateTokenExpiry } from "../utils/util";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export const apiRequest = async <ResponseType, RequestPayloadType>(
  endpoint: string,
  method: HttpMethod = "GET",
  payload?: RequestPayloadType,
  tokenization: boolean = false,
  isNotifySuccess: boolean = true
): Promise<ISuccessResponse<ResponseType> | IErrorResponse> => {
  try {
    eventBus.emit({ type: "loader_start", message: "Loading..." });
    const token = getStorageItem("token")?.toString();
    const navigate = getNavigator();
    if (token && navigate) {
      validateTokenExpiry(navigate);
    }
    const headers =
      token && token !== "" && tokenization
        ? { Authorization: `Bearer ${token}` }
        : {};

    const response = await apiClient.request<
      ISuccessResponse<ResponseType> | IErrorResponse
    >({
      url: endpoint,
      method,
      data: payload,
      headers,
    });

    if (response?.data?.statusCode === 1) {
      if (isNotifySuccess) {
        eventBus.emit({ type: "success", message: response.data.message });
      }
      return response.data as ISuccessResponse<ResponseType>;
    }

    if (response?.data?.statusCode === 0) {
      const errorValue = (response?.data as IErrorResponse)?.error;
      const errorMessage =
        typeof errorValue === "string"
          ? errorValue
          : (response?.data as IErrorResponse)?.shortHand;
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
    return handleApiError(error);
  } finally {
    eventBus.emit({ type: "loader_stop", message: "Loading stop..." });
  }
};

export const multiPartAPI = async <ResponseType>(
  endpoint: string,
  formData: FormData,
  tokenization: boolean = false,
  isNotifySuccess: boolean = true
): Promise<ISuccessResponse<ResponseType> | IErrorResponse> => {
  try {
    eventBus.emit({ type: "loader_start", message: "Loading..." });
    const token = getStorageItem("token")?.toString();
    const navigate = getNavigator();
    if (token && navigate) {
      validateTokenExpiry(navigate);
    }
    const headers =
      token && token !== "" && tokenization
        ? { Authorization: `Bearer ${token}` }
        : {};

    const config: AxiosRequestConfig<FormData> = {
      headers,
    };

    const response = await multipartApiClient.post(endpoint, formData, config);

    if (response?.data?.statusCode === 1) {
      if (isNotifySuccess) {
        eventBus.emit({ type: "success", message: response.data.message });
      }
      return response.data as ISuccessResponse<ResponseType>;
    }
    if (response?.data?.statusCode === 0) {
      const errorValue = (response?.data as IErrorResponse)?.error;
      const errorMessage =
        typeof errorValue === "string"
          ? errorValue
          : (response?.data as IErrorResponse)?.shortHand;
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
    return handleApiError(error);
  } finally {
    eventBus.emit({ type: "loader_stop", message: "Loading stop..." });
  }
};
