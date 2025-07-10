import { AxiosError } from "axios";

import { eventBus } from "../contexts/context/eventBus";
import { IErrorResponse } from "../types/api/api.type";

export const handleApiError = (error: unknown, customMessage?: string): IErrorResponse => {
    const fallback: IErrorResponse = {
        statusCode: 0,
        errorCode: 500,
        errorMessage: "Unexpected error occurred!",
        shortHand: "SERVER_ERROR",
        error: "",
    };

    if ((error as AxiosError)?.isAxiosError) {
        const axiosError = error as AxiosError;

        if (axiosError.code === "ERR_NETWORK") {
            fallback.errorMessage = "Network error. Please check your internet connection.";
            fallback.shortHand = "NETWORK_ERROR";
            fallback.error = axiosError.message;
        } else if (axiosError.response) {
            fallback.statusCode = 0;
            fallback.errorCode = axiosError.response.status || 500;
            fallback.errorMessage =
                (axiosError.response.data as { message?: string })?.message || "API responded with an error.";
            fallback.shortHand = "API_ERROR";
            fallback.error = JSON.stringify(axiosError.response.data || {});
        } else {
            fallback.error = axiosError.message || "Axios error occurred";
        }
    } else if (error instanceof Error) {
        fallback.error = error.message;
        fallback.errorMessage = customMessage || error.message;
        fallback.shortHand = "GENERIC_ERROR";
    } else {
        fallback.error = "Unknown error format";
    }

    eventBus.emit({
        type: "danger",
        message: fallback.errorMessage,
    });
    // eslint-disable-next-line no-console
    console.log("fallbackError", fallback,"realError", error);
    return fallback;
};