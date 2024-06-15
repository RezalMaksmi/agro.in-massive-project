import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";

const backendURL = "http://localhost:4000/";

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

// add spaceeee
export const postSpaceAPIAct = createAsyncThunk(
  "post/space/api",
  async ({ title, description }) => {
    try {
      const response = await axiosInstance.post(`${backendURL}spaces/`, {
        title,
        description,
      });
      console.log("apa responsnyya", response.data);
      toast.success(`${response.data.message}`, {
        position: "bottom-right",
      });
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
      return error.response;
    }
  }
);

export const getExploreAPIAct = createAsyncThunk(
  "get/explore/api",
  async (path) => {
    try {
      const response = await axiosInstance.get(`${backendURL}${path}`);
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

export const getAPIActDetail = createAsyncThunk(
  "get/apiDetail/ruang",
  async (path) => {
    try {
      const response = await axiosInstance.get(`${backendURL}${path}`);
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

export const getAPIActDiskusiSpacesOwned = createAsyncThunk(
  "get/api/owned",
  async (path) => {
    try {
      const response = await axiosInstance.get(`${backendURL}${path}`);
      if (response) {
        console.log(response.data.data);

        return response.data.data.spaces;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const deleteAPIActDiskusiSpaces = createAsyncThunk(
  "delete/api/spaces",
  async (path) => {
    console.log("apa ini", path);
    try {
      const response = await axiosInstance.delete(`${backendURL}${path}`);
      if (response) {
        toast.success(`${response.data.message}`, {
          position: "bottom-right",
        });

        return response.data.data.spaces;
      }
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: "bottom-right",
      });
      console.log(error.response);

      throw error;
    }
  }
);

export const getAPIActDiskusiSpacesfollowing = createAsyncThunk(
  "get/api/following",
  async (path) => {
    try {
      const response = await axiosInstance.get(`${backendURL}${path}`);
      if (response) {
        console.log(response.data.data);

        return response.data.data.spaces;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const getAPIActDiskusiSpacesFollow = createAsyncThunk(
  "get/api/follow",
  async (path) => {
    try {
      const response = await axiosInstance.post(`${backendURL}${path}`);
      if (response) {
        toast.success(`${response.data.message}`, {
          position: "bottom-right",
        });

        return response.data.data.spaces;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const getAPIActDiskusiSpacesUnFollow = createAsyncThunk(
  "get/api/unfollow",
  async (path) => {
    try {
      const response = await axiosInstance.delete(`${backendURL}${path}`);
      if (response) {
        toast.success(`${response.data.message}`, {
          position: "bottom-right",
        });

        return response.data.data.spaces;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
// export const getAPIActDiskusiSpacesUnFollow = createAsyncThunk(
//   "get/api/unfollow",
//   async (path) => {
//     try {
//       console.log(path);
//       const response = await axiosInstance.delete(
//         `${backendURL}${path}`
//       );
//       if (response) {
//         console.log(response.data.data);
//         toast.success(`${response.data.message}`, {
//           position: "bottom-right",
//         });
//         return response.data.data.spaces;
//       }
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   }
// );

export const getDetailAPIActSpaces = createAsyncThunk(
  "get/detail/spaces",
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

const Spaces = createSlice({
  name: "spaces",
  initialState: {
    data: null,
    explore: null,
    owned: null,
    following: null,
    detail: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExploreAPIAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getExploreAPIAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.explore = action.payload;
      })
      .addCase(getExploreAPIAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // add space
      .addCase(postSpaceAPIAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postSpaceAPIAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(postSpaceAPIAct.rejected, (state, action) => {
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
      })

      // diskusi owned
      .addCase(getAPIActDiskusiSpacesOwned.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAPIActDiskusiSpacesOwned.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.owned = action.payload;
      })
      .addCase(getAPIActDiskusiSpacesOwned.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // diskusi owned
      .addCase(getAPIActDiskusiSpacesfollowing.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAPIActDiskusiSpacesfollowing.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.following = action.payload;
      })
      .addCase(getAPIActDiskusiSpacesfollowing.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // // diskusi unfollow space
    // .addCase(getAPIActDiskusiSpacesUnFollow.pending, (state) => {
    //   state.status = "loading";
    // })
    // .addCase(getAPIActDiskusiSpacesUnFollow.fulfilled, (state, action) => {
    //   state.status = "succeeded";
    //   state.following = action.payload;
    // })
    // .addCase(getAPIActDiskusiSpacesUnFollow.rejected, (state, action) => {
    //   state.status = "failed";
    //   state.error = action.error.message;
    // });
  },
});

export default Spaces.reducer;
