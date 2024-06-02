import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

// Async thunk untuk post
export const postAPIAct = createAsyncThunk("post/api", async (url, body) => {
  try {
    console.log("opokiiiiiiiiiiiiiii", url);
    console.log("bogiyyyyyy", body);
    const response = await axiosInstance.post(url, body);
    if (response) {
      return response.data;
    }
    console.log("apa responsnyya", response.data);
  } catch (error) {
    console.log(error);
    return error.response;
  }
});

const postData = createSlice({
  name: "post",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postAPIAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postAPIAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(postAPIAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default postData.reducer;
