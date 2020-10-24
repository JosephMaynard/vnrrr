import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IPostsReducer, IRedditPostsResponce } from './types';

const initialState: IPostsReducer = {
  loading: true,
  keepCurrentSubreddit: false,
  error: false,
  posts: [],
  postIDs: [],
};

export interface IGetPostsOptions {
  subreddit?: string;
  after?: string;
  page?: number;
  isFrontPage?: boolean;
}

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (options: IGetPostsOptions) => {
    const response = await axios.get(
      `https://www.reddit.com/${
        options.isFrontPage ? 'best' : `r/${options.subreddit}`
      }.json?${options.after || options.page ? 'count=25' : ''}${
        options.page ? `&page=${options.page}` : ''
      }${options.after ? `&after=${options.after}` : ''}&raw_json=1`
    );
    return {
      response: response.data,
      currentSubreddit: options.subreddit,
    };
  }
);

const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    clearPosts: (state) => {
      state.loading = true;
      state.error = false;
      state.keepCurrentSubreddit = false;
      state.posts = [];
      state.postIDs = [];
    },
    setKeepCurrentSubreddit: (state, action: PayloadAction<boolean>) => {
      state.keepCurrentSubreddit = action.payload;
    },
  },
  extraReducers: {
    [getPosts.pending.toString()]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getPosts.fulfilled.toString()]: (
      state,
      action: PayloadAction<{
        response: IRedditPostsResponce;
        currentSubreddit: string;
      }>
    ) => {
      action.payload.response.data.children.forEach((post): void => {
        if (state.postIDs.indexOf(post.data.id) === -1) {
          state.posts.push(post.data);
          state.postIDs.push(post.data.id);
        }
      });
      state.loading = false;
      state.error = false;
      state.currentSubreddit = action.payload.currentSubreddit;
    },
  },
});

export const { clearPosts, setKeepCurrentSubreddit } = posts.actions;

export default posts;
