import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "http://localhost:4000";

// Async thunk untuk login
export const getArtikel = createAsyncThunk("get/data", async ({ endPoint }) => {
  const response = await axios.post(`${(backendURL, endPoint)}`);
  return response.data;
});

const getData = createSlice({
  name: "get",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getArtikel.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getArtikel.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getArtikel.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default getData.reducer;
