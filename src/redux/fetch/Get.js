import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "http://localhost:8000";

export const getAPIAct = createAsyncThunk("get/api", async (url) => {
  try {
    const response = await axios.get(url);
    if (response) {
      console.log("data test", response);
      return response;
    }
  } catch (error) {
    throw error;
  }
});
// detail data
export const showData = createAsyncThunk(
  "product/showData",
  async (productId) => {
    const response = await axios.get(`${backendURL}/peserta/${productId}`);
    return response.data.data;
  }
);

// add data
export const addData = createAsyncThunk("data/addData", async (newData) => {
  try {
    const response = await axios.post(`${backendURL}/peserta/`, newData);
    console.log("api tambah = ", newData);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchAPISlice = createSlice({
  name: "fetchAPI",
  initialState: {
    test: [],
    data: [],
    detailsData: {},
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAPIAct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAPIAct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getAPIAct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addData.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(addData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // details
      .addCase(showData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(showData.fulfilled, (state, action) => {
        state.loading = false;
        state.detailsData = action.payload;
      })
      .addCase(showData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default fetchAPISlice.reducer;
