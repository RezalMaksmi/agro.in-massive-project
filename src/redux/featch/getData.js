import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";

// const backendURL = "http://localhost:4000";

// Async thunk untuk login
export const getAPIAct = createAsyncThunk("get/api", async (url) => {
  try {
    const response = await axiosInstance.get(url);
    if (response) {
      console.log(response.data);

      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
});

// Async thunk untuk login
export const getFoodPricesAPIAct = createAsyncThunk(
  "get/food/api",
  async (url) => {
    try {
      const response = await axiosInstance.get(url);
      if (response) {
        console.log("apa isinya", response.data);

        return response.data.data;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const getArtikelAPIAct = createAsyncThunk(
  "get/artikel/api",
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

export const getAPIActDiskusiSpacesOwned = createAsyncThunk(
  "get/api/owned",
  async (path) => {
    try {
      const response = await axiosInstance.get(`http://localhost:4000/${path}`);
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

// export const deleteAPIActDiskusiSpacesOwned = createAsyncThunk(
//   "delete/api/owned",
//   async (path) => {
//     console.log("apa ini");
//     try {
//       const response = await axiosInstance.delete(
//         `http://localhost:4000/${path}`
//       );
//       if (response) {
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

export const getAPIActDiskusiSpacesfollowing = createAsyncThunk(
  "get/api/following",
  async (path) => {
    try {
      const response = await axiosInstance.get(`http://localhost:4000/${path}`);
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
      const response = await axiosInstance.post(
        `http://localhost:4000/${path}`
      );
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

const getData = createSlice({
  name: "get",
  initialState: {
    data: null,
    foodPrices: null,
    owned: null,
    following: null,
    detail: null,
    artikel: null,
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

      .addCase(getFoodPricesAPIAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getFoodPricesAPIAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.foodPrices = action.payload;
      })
      .addCase(getFoodPricesAPIAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // artikel
      .addCase(getArtikelAPIAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getArtikelAPIAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artikel = action.payload;
      })
      .addCase(getArtikelAPIAct.rejected, (state, action) => {
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
  },
});

export default getData.reducer;
