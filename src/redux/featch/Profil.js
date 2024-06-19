import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";

const apiKey = process.env.API_URL;

// Async thunk untuk post
export const updateProfilAPIAct = createAsyncThunk(
  "post/update/profil",
  async (body) => {
    try {
      const response = await axiosInstance.patch(`${apiKey}/users/`, body);
      console.log("apa responsnyya bodyyy:", body);

      const data = response.data.data;
      // console.log("apa responsnyya", response.data);
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data));
      toast.success(`${response.data.message}`, {
        position: "bottom-right",
      });
      return response.data.data;
    } catch (error) {
      console.log(error);
      toast.error(`${error.response.data.message}`, {
        position: "bottom-right",
      });
      return error;
    }
  }
);

const Profil = createSlice({
  name: "profil",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateProfilAPIAct.pending, (state) => {
        state.status = "loading";
      })
      // .addCase(updateProfilAPIAct.fulfilled, (state, action) => {
      //   state.status = "succeeded";
      //   state.data = action.payload;
      // })
      .addCase(updateProfilAPIAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default Profil.reducer;
