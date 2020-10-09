import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IRedditPost, IPostsReducer, IRedditPostsResponce } from './types';

const initialState: IPostsReducer = {
  loading: true,
  error: false,
  posts: [],
  postIDs: [],
};

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (subreddits: string) => {
    const response = await axios.get(
      `https://www.reddit.com/r/${subreddits}.json`
    );
    return response.data;
  }
);

const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{ posts: IRedditPost[] }>) => {
      action.payload.posts.forEach((post): void => {
        if (state.postIDs.indexOf(post.data.id) === -1) {
          state.posts.push(post);
          state.postIDs.push(post.data.id);
        }
      });
    },
  },
  extraReducers: {
    [getPosts.pending.toString()]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getPosts.fulfilled.toString()]: (
      state,
      action: PayloadAction<IRedditPostsResponce>
    ) => {
      action.payload.data.children.forEach((post): void => {
        if (state.postIDs.indexOf(post.data.id) === -1) {
          state.posts.push(post);
          state.postIDs.push(post.data.id);
          state.loading = false;
          state.error = false;
        }
      });
    },
  },
});

export default posts;
