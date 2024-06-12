import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { saveState, loadState } from "../utils/localStorage";
import getData from "./featch/getData";
import Spaces from "./featch/Spaces";
import Profil from "./featch/Profil";
import Posts from "./featch/Posts";

const preloadedState = loadState();
export const store = configureStore({
  reducer: {
    auth: authReducer,
    get: getData,
    profil: Profil,
    spaces: Spaces,
    posts: Posts,
  },
  preloadedState,
});

// store.subscribe(() => {
//   saveState({
//     auth: store.getState().auth,
//   });
// });

export default store;
