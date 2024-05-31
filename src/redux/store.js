import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { saveState, loadState } from "../utils/localStorage";
import getData from "./featch/getData";

const preloadedState = loadState();
export const store = configureStore({
  reducer: {
    auth: authReducer,
    get: getData,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
  });
});

export default store;
