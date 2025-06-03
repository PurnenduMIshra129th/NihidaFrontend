import axios from "axios";

import { API_BASE_URL } from "../utils/config";

// Function to create an Axios instance with dynamic Content-Type
const createApiClient = (contentType: string = "application/json") => {
  return axios.create({
    baseURL: API_BASE_URL,
    // timeout: 5000,
    headers: {
      "Content-Type": contentType,
    },
  });
};

// Default client for JSON requests
export const apiClient = createApiClient();

// Separate client for multipart/form-data requests
export const multipartApiClient = createApiClient("multipart/form-data");