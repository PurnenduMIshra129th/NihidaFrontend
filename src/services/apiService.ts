// utils/apiRequest.ts
import apiClient from "../services/axiosInstance";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export const apiRequest = async <T,>(endpoint: string, method: HttpMethod = "GET", payload?: { [key: string]: string }): Promise<T | null> => {
  try {
    const response = await apiClient.request<T>({
      url: endpoint,
      method,
      data: payload,
    });
    return response.data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("API Request Error:", err);
    return null;
  }
};