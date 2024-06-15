import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk untuk login
export const AnalisisAct = createAsyncThunk("get/api", async (data) => {
  return data;
});

const Analisis = createSlice({
  name: "analisis",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AnalisisAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(AnalisisAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(AnalisisAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default Analisis.reducer;
