import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  return axios
    .get(`https://techcrunch.com/wp-json/wp/v2/posts?page=1&per_page=7`)
    .then((res) => res.data);
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    fetching: true,
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.fetching = true;
      console.log("working");
    },
    [fetchPosts.fulfilled]: (state, { payload }) => {
      state.posts.push(payload);
      state.fetching = false;
      console.log(state.posts, "posts");
    },
    [fetchPosts.rejected]: (state, action) => {
      state.fetching = false;
      console.log("failed");
    },
  },
});

export const selectPosts = (state) => state.posts.posts;
export const selectFetching = (state) => state.posts.fetching;

export default postsSlice.reducer;
