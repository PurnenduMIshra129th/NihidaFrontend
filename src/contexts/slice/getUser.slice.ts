import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiRequest } from "../../services/apiService";
import { IGetUserApiResponse } from "../../types/api/api.type";
import { handleApiError } from "../../utils/handleApiError";
import { RootState } from "../store";

export const fetchUser = createAsyncThunk<IGetUserApiResponse | null, undefined, { state: RootState }>(
  "auth/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiRequest<IGetUserApiResponse, undefined>(
        "/authentication/getUser",
        "GET",
        undefined,
        true,false
      );
      if (response.statusCode == 1) {
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

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: {} as IGetUserApiResponse | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {
    setUser: (state, action: PayloadAction<IGetUserApiResponse>) => {
      state.userDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userDetails = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setUser } = userSlice.actions;
export const getUser = (state: RootState) => state.user.userDetails;
export default userSlice.reducer;
