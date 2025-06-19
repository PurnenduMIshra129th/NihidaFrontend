import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiClient } from "../../services/axiosInstance";
import { IApiResponse, IServiceApiData } from "../../types/api/service.types";
import { handleApiError } from "../../utils/handleApiError";
import { RootState } from "../store";

export const fetchService = createAsyncThunk<IApiResponse>(
    "service/fetchService",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.request({ url: "/productAndService/getAllProductAndService", method: "GET" });            
            if (response?.data?.statusCode == 1 && response?.data?.data?.length > 0) {                
                return response?.data
            } else {
                return rejectWithValue('No data found');
            }
        } catch (error) {
            return rejectWithValue(handleApiError(error));
        }
    }
);

const serviceSlice = createSlice({
    name: "service",
    initialState: {
        serviceList: [] as IServiceApiData[],
        loading: false,
        error: null as string | null,
    },
    reducers: {
        setServiceList: (state, action: PayloadAction<IServiceApiData[]>) => {
            state.serviceList = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchService.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchService.fulfilled, (state, action) => {
                state.loading = false;
                state.serviceList = action.payload.data;               
            })
            .addCase(fetchService.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { setServiceList } = serviceSlice.actions;
export const selectService = (state: RootState) => state.service.serviceList;
export default serviceSlice.reducer;