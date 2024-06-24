import axios from "axios";
import React from "react";

import Cookies from "js-cookie";
// import env from "react-dotenv";

// console.log(env.API_URL);
const apiKey = process.env.API_URL;

// console.log(apiKey);
const axiosInstance = axios.create({
  baseURL: apiKey,
});

axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("token");

  if (token) {
    config.headers.Authorization = `${token ? `Bearer ${token}` : ""}`;
  }
  return config;
});

export default axiosInstance;
