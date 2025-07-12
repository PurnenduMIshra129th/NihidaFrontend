import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiRequest } from "../../services/apiService";
import { INewsApiResponse } from "../../types/api/api.type";
import { handleApiError } from "../../utils/handleApiError";
import { RootState } from "../store";

export const fetchAllNews = createAsyncThunk<INewsApiResponse[] | null, undefined, { state: RootState }>(
  "news/fetchNews",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiRequest<INewsApiResponse[], undefined>(
        "/news/getAllNews",
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

const newsSlice = createSlice({
  name: "news",
  initialState: {
    newsList: [] as INewsApiResponse[] | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {
    setNewsList: (state, action: PayloadAction<INewsApiResponse[]>) => {
      state.newsList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllNews.fulfilled, (state, action) => {
        state.loading = false;
        state.newsList = action.payload;
      })
      .addCase(fetchAllNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setNewsList } = newsSlice.actions;
export const selectNews = (state: RootState) => state.news.newsList;
export default newsSlice.reducer;
