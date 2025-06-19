import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiClient } from "../../services/axiosInstance";
import { IApiResponse, ISocialLinkApiData } from "../../types/api/socialLink.types";
import { handleApiError } from "../../utils/handleApiError";
import { RootState } from "../store";

export const fetchSocialLink = createAsyncThunk<IApiResponse>(
    "socialLink/fetchSocialLink",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.request({ url: "/socialLink/getAllSocialLink", method: "GET" });            
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

const socialLinkSlice = createSlice({
    name: "socialLink",
    initialState: {
        socialLinkList: [] as ISocialLinkApiData[],
        loading: false,
        error: null as string | null,
    },
    reducers: {
        setSocialLinkList: (state, action: PayloadAction<ISocialLinkApiData[]>) => {
            state.socialLinkList = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSocialLink.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSocialLink.fulfilled, (state, action) => {
                state.loading = false;
                state.socialLinkList = action.payload.data;               
            })
            .addCase(fetchSocialLink.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { setSocialLinkList } = socialLinkSlice.actions;
export const selectSocialLink = (state: RootState) => state.socialLink.socialLinkList;
export default socialLinkSlice.reducer;