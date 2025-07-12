import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiRequest } from "../../services/apiService";
import { IGalleryApiResponse } from "../../types/api/api.type";
import { handleApiError } from "../../utils/handleApiError";
import { RootState } from "../store";

export const fetchAllGallery = createAsyncThunk<IGalleryApiResponse[] | null, undefined, { state: RootState }>(
  "gallery/fetchGallery",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiRequest<IGalleryApiResponse[], undefined>(
        "/gallery/getAllGallery",
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

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    galleryList: [] as IGalleryApiResponse[] | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {
    setGalleryList: (state, action: PayloadAction<IGalleryApiResponse[]>) => {
      state.galleryList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllGallery.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllGallery.fulfilled, (state, action) => {
        state.loading = false;
        state.galleryList = action.payload;
      })
      .addCase(fetchAllGallery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setGalleryList } = gallerySlice.actions;
export const selectGallery = (state: RootState) => state.gallery.galleryList;
export default gallerySlice.reducer;
