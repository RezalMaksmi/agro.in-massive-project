import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk untuk login
export const AnalisisAct = createAsyncThunk(
  "get/analisistanah/api",
  async (data) => {
    return data;
  }
);

export const AnalisisCuacaAct = createAsyncThunk(
  "get/cuaca/api",
  async (data) => {
    return data;
  }
);

export const AnalisisTemperatureAct = createAsyncThunk(
  "get/temp/api",
  async (data) => {
    return data;
  }
);

export const getLocationAct = createAsyncThunk(
  "get/location/api",
  async (data) => {
    return data;
  }
);

const Analisis = createSlice({
  name: "analisis",
  initialState: {
    data: null,
    temp: null,
    location: null,
    cuaca: null,
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
      })

      .addCase(AnalisisCuacaAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(AnalisisCuacaAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cuaca = action.payload;
      })
      .addCase(AnalisisCuacaAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(AnalisisTemperatureAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(AnalisisTemperatureAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.temp = action.payload;
      })
      .addCase(AnalisisTemperatureAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(getLocationAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getLocationAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.location = action.payload;
      })
      .addCase(getLocationAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default Analisis.reducer;
