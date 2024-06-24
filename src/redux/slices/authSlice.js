import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import axios from "axios";

// const backendURL = "http://localhost:4000";
const apiKey = process.env.API_URL;

// Async thunk untuk login
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const response = await axiosInstance.post(`${apiKey}/auth/login`, {
        email,
        password,
      });
      console.log(apiKey);
      const newToken = `${response.data.token}`;
      Cookies.set("token", newToken, { expires: 1 });
      const data = response.data;
      localStorage.setItem("user", JSON.stringify(data.data));
      return data;
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: "bottom-right",
      });
      return error.response;
    }
  }
);

// Async thunk untuk register

export const register = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }) => {
    try {
      const response = await axios.post(`${apiKey}/auth/register`, {
        username,
        email,
        password,
      });
      toast.success("register berhasil!", {
        position: "bottom-right",
      });
      const data = response.data;
      console.log("apa responnya", response.data);

      return data;
    } catch (error) {
      // toast.error(`${error.response.data.message}`, {
      //   position: "bottom-right",
      // });
      toast.error(`Email sudah terdaftar!`, {
        position: "bottom-right",
      });
      return error.response;
    }
  }
);

const localData = JSON.stringify(localStorage.getItem("user"));
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user") || null),
    // user: null,
    token: Cookies.get("token") || null,
    status: "idle",
    message: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.status = null;
      Cookies.remove("token");
      localStorage.removeItem("dataUser");
      localStorage.removeItem("user");
      toast.info("Logged out successfully!", {
        position: "bottom-right",
      });
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.data;
        state.message = action.payload.data;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data.message;
      })

      // Register
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = action.payload.status;
        state.user = action.payload.data;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data.message;
        console.log("apa erornya", action.error);
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
