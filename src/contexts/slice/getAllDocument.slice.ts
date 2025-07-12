import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiRequest } from "../../services/apiService";
import { IDocumentApiResponse } from "../../types/api/api.type";
import { handleApiError } from "../../utils/handleApiError";
import { RootState } from "../store";

export const fetchAllDocument = createAsyncThunk<IDocumentApiResponse[] | null, undefined, { state: RootState }>(
  "document/fetchDocument",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiRequest<IDocumentApiResponse[], undefined>(
        "/document/getAllDocument",
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

const documentSlice = createSlice({
  name: "document",
  initialState: {
    documentList: [] as IDocumentApiResponse[] | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {
    setDocumentList: (state, action: PayloadAction<IDocumentApiResponse[]>) => {
      state.documentList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDocument.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllDocument.fulfilled, (state, action) => {
        state.loading = false;
        state.documentList = action.payload;
      })
      .addCase(fetchAllDocument.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setDocumentList } = documentSlice.actions;
export const selectDocument = (state: RootState) => state.document.documentList;
export default documentSlice.reducer;
