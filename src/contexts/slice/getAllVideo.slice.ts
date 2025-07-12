import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiRequest } from "../../services/apiService";
import { IVideoApiResponse } from "../../types/api/api.type";
import { handleApiError } from "../../utils/handleApiError";
import { RootState } from "../store";

export const fetchAllVideo = createAsyncThunk<IVideoApiResponse[] | null, undefined, { state: RootState }>(
  "video/fetchVideo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiRequest<IVideoApiResponse[], undefined>(
        "/video/getAllVideo",
        "GET",undefined,false,false
      );
      if (response?.statusCode == 1) {
        return response?.data;
      } else if (response?.statusCode === 0) {
        return null;
      } else {
        return rejectWithValue("No data found");
      }
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videoList: [] as IVideoApiResponse[] | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {
    setVideoList: (state, action: PayloadAction<IVideoApiResponse[]>) => {
      state.videoList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllVideo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllVideo.fulfilled, (state, action) => {
        state.loading = false;
        state.videoList = action.payload;
      })
      .addCase(fetchAllVideo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setVideoList } = videoSlice.actions;
export const selectVideo = (state: RootState) => state.video.videoList;
export default videoSlice.reducer;
