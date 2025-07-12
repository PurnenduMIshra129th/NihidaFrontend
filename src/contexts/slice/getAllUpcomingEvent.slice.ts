import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiRequest } from "../../services/apiService";
import { IUpcomingEventApiResponse } from "../../types/api/api.type";
import { handleApiError } from "../../utils/handleApiError";
import { RootState } from "../store";

export const fetchAllUpcomingEvent = createAsyncThunk<IUpcomingEventApiResponse[] | null, undefined, { state: RootState }>(
  "upcomingEvent/fetchUpcomingEvent",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiRequest<IUpcomingEventApiResponse[], undefined>(
        "/upcomingEvent/getAllUpcomingEvent",
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

const upcomingEventSlice = createSlice({
  name: "upcomingEvent",
  initialState: {
    upcomingEventList: [] as IUpcomingEventApiResponse[] | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {
    setUpcomingEventList: (
      state,
      action: PayloadAction<IUpcomingEventApiResponse[]>
    ) => {
      state.upcomingEventList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUpcomingEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUpcomingEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.upcomingEventList = action.payload;
      })
      .addCase(fetchAllUpcomingEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setUpcomingEventList } = upcomingEventSlice.actions;
export const selectUpcomingEvent = (state: RootState) =>
  state.upcomingEvent.upcomingEventList;
export default upcomingEventSlice.reducer;
