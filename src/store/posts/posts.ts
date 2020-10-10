import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IRedditPost, IPostsReducer, IRedditPostsResponce } from './types';

const initialState: IPostsReducer = {
  loading: true,
  error: false,
  posts: [],
  postIDs: [],
};

export interface IGetPostsOptions {
  subreddit: string;
  after?: string;
  page?: number;
}

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (options: IGetPostsOptions) => {
    const response = await axios.get(
      `https://www.reddit.com/r/${options.subreddit}.json${
        options.after || options.page ? '?count=25' : ''
      }${options.page ? `&page=${options.page}` : ''}${
        options.after ? `&after=${options.after}` : ''
      }`
    );
    return response.data;
  }
);

const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    clearPosts: (state) => {
      state.loading = true;
      state.error = false;
      state.posts = [];
      state.postIDs = [];
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
          state.posts.push(post.data);
          state.postIDs.push(post.data.id);
          state.loading = false;
          state.error = false;
        }
      });
    },
  },
});

export const { clearPosts } = posts.actions;

export default posts;
