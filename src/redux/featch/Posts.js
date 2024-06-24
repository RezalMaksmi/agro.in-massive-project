import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";

const apiKey = process.env.API_URL;

// Async thunk untuk login
export const getPostsAPIAct = createAsyncThunk("get/posts/api", async (url) => {
  try {
    const response = await axiosInstance.get(`${apiKey}/${url}`);
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
});

// Async thunk untuk login
export const getPostsAPIActDetail = createAsyncThunk(
  "get/posts/detail/api",
  async (url) => {
    try {
      const response = await axiosInstance.get(`${apiKey}/${url}`);
      if (response) {
        return response.data.data;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const getPostsAPIActComments = createAsyncThunk(
  "get/posts/comments/api",
  async (id) => {
    try {
      const response = await axiosInstance.get(
        `${apiKey}/posts/${id}/comments`
      );
      if (response) {
        return response.data.data;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

// add spaceeee
export const postPostsAPIAct = createAsyncThunk(
  "post/posts/api",
  async ({ title, description, type, img, space_id }) => {
    try {
      const response = await axiosInstance.post(`${apiKey}/posts/`, {
        title,
        description,
        type,
        img,
        space_id,
      });
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

// add spaceeee
export const commentPostsAPIAct = createAsyncThunk(
  "post/comment/posts/api",
  async ({ id, text }) => {
    try {
      const response = await axiosInstance.post(
        `${apiKey}/posts/${id}/comments`,
        {
          text,
        }
      );

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

// up comment
export const likeUpPostsAPIAct = createAsyncThunk(
  "like/comment/posts/api",
  async ({ id, idComment, type }) => {
    try {
      const response = await axiosInstance.post(
        `${apiKey}/posts/${id}/comments/${idComment}`,
        {
          type: type,
        }
      );

      if (response) {
        toast.success(`${response.data.message}`, {
          position: "bottom-right",
        });
        return response.data;
      }
    } catch (error) {
      console.log(error);
      return error.response;
    }
  }
);

// Async thunk search posts
export const searchPostsAPIAct = createAsyncThunk(
  "search/posts/api",
  async (url) => {
    try {
      const response = await axiosInstance.get(`${apiKey}/${url}`);
      if (response) {
        return response.data.data;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
const Spaces = createSlice({
  name: "posts",
  initialState: {
    data: null,
    detail: null,
    comments: null,
    searching: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsAPIAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPostsAPIAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.posts;
      })
      .addCase(getPostsAPIAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(getPostsAPIActDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPostsAPIActDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload.post;
      })
      .addCase(getPostsAPIActDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // comments
      .addCase(getPostsAPIActComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPostsAPIActComments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.comments = action.payload.comments;
      })
      .addCase(getPostsAPIActComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // seacrch
      .addCase(searchPostsAPIAct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchPostsAPIAct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searching = action.payload.posts;
      })
      .addCase(searchPostsAPIAct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    //   // add space
    //   .addCase(postSpaceAPIAct.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(postSpaceAPIAct.fulfilled, (state, action) => {
    //     state.status = "succeeded";
    //     state.data = action.payload;
    //   })
    //   .addCase(postSpaceAPIAct.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.error.message;
    //   })
  },
});

export default Spaces.reducer;
