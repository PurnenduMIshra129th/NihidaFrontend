import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiRequest } from "../../services/apiService";
import { ISocialLinkAndCommonImageApiResponse } from "../../types/api/api.type";
import { handleApiError } from "../../utils/handleApiError";
import { RootState } from "../store";

export const fetchSocialLinkAndCommonImage = createAsyncThunk<ISocialLinkAndCommonImageApiResponse[] | null, undefined, { state: RootState }>(
  "socialLinkAndCommonImage/fetchSocialLinkAndCommonImage",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiRequest<
        ISocialLinkAndCommonImageApiResponse[],
        undefined
      >("/socialLinkAndCommonImage/getAllSocialLinkAndCommonImage", "GET",undefined,false,false);
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

const socialLinkAndCommonImageSlice = createSlice({
  name: "socialLinkAndCommonImage",
  initialState: {
    socialLinkAndCommonImageList: [] as
      | ISocialLinkAndCommonImageApiResponse[]
      | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {
    setSocialLinkAndCommonImageList: (
      state,
      action: PayloadAction<ISocialLinkAndCommonImageApiResponse[]>
    ) => {
      state.socialLinkAndCommonImageList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSocialLinkAndCommonImage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSocialLinkAndCommonImage.fulfilled, (state, action) => {
        state.loading = false;
        state.socialLinkAndCommonImageList = action.payload;
      })
      .addCase(fetchSocialLinkAndCommonImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSocialLinkAndCommonImageList } =
  socialLinkAndCommonImageSlice.actions;
export const selectSocialLinkAndCommonImage = (state: RootState) =>
  state.socialLinkAndCommonImage.socialLinkAndCommonImageList;
export default socialLinkAndCommonImageSlice.reducer;
