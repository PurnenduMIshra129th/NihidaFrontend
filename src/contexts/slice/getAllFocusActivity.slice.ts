
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiRequest } from "../../services/apiService";
import { IFocusActivityApiResponse } from "../../types/api/api.type";
import { handleApiError } from "../../utils/handleApiError";
import { RootState } from "../store";

export const fetchAllFocusActivity = createAsyncThunk<IFocusActivityApiResponse[] | null, undefined, { state: RootState }>(
  "focusActivity/fetchFocusActivity",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiRequest<IFocusActivityApiResponse[], undefined>(
        "/focusActivity/getAllFocusActivity",
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

const focusActivitySlice = createSlice({
  name: "focusActivity",
  initialState: {
    focusActivityList: [] as IFocusActivityApiResponse[] | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {
    setFocusActivityList: (
      state,
      action: PayloadAction<IFocusActivityApiResponse[]>
    ) => {
      state.focusActivityList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFocusActivity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllFocusActivity.fulfilled, (state, action) => {
        state.loading = false;
        state.focusActivityList = action.payload;
      })
      .addCase(fetchAllFocusActivity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setFocusActivityList } = focusActivitySlice.actions;
export const selectFocusActivity = (state: RootState) =>
  state.focusActivity.focusActivityList;
export default focusActivitySlice.reducer;


