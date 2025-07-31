import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiRequest } from "../../services/apiService";
import { ITeamMemberApiResponse } from "../../types/api/api.type";
import { handleApiError } from "../../utils/handleApiError";
import { RootState } from "../store";

export const fetchAllTeamMember = createAsyncThunk<ITeamMemberApiResponse[] | null, undefined, { state: RootState }>(
  "teamMember/fetchTeamMember",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiRequest<ITeamMemberApiResponse[], undefined>(
        "/teamMember/getAllTeamMember",
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

const teamMemberSlice = createSlice({
  name: "teamMember",
  initialState: {
    teamMemberList: [] as ITeamMemberApiResponse[] | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {
    setTeamMemberList: (state, action: PayloadAction<ITeamMemberApiResponse[]>) => {
      state.teamMemberList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTeamMember.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllTeamMember.fulfilled, (state, action) => {
        state.loading = false;
        state.teamMemberList = action.payload;
      })
      .addCase(fetchAllTeamMember.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setTeamMemberList } = teamMemberSlice.actions;
export const selectTeamMember = (state: RootState) => state.teamMember.teamMemberList;
export default teamMemberSlice.reducer;
