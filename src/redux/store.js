import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
// import getData from "./get/getData";
import { saveState, loadState } from "../utils/localStorage";

const preloadedState = loadState();
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
  });
});

export default store;
