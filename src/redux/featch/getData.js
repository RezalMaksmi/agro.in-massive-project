import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

// const backendURL = "http://localhost:4000";

// Async thunk untuk login
export const getAPIAct = createAsyncThunk("get/api", async (url) => {
  try {
    const response = await axiosInstance.get(url);
    if (response) {
      console.log(response.data.data);

      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const getAPIActDetail = createAsyncThunk(
  "get/apiDetail",
  async (url) => {
    try {
      const response = await axiosInstance.get(url);
      if (response) {
        console.log(response.data.data);

        return response.data.data;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const getData = createSlice({
  name: "get",
  initialState: {
    data: null,
    detail: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAPIAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAPIAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAPIAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(getAPIActDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAPIActDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload;
      })
      .addCase(getAPIActDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default getData.reducer;
