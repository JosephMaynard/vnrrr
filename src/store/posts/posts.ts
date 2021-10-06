import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IPostsReducer, IRedditPostsResponce } from './types';

const initialState: IPostsReducer = {
  loading: true,
  keepCurrentSubreddit: false,
  error: false,
  posts: [],
  postIDs: [],
  postsSort: '',
};

export interface IGetPostsOptions {
  subreddit?: string;
  after?: string;
  page?: number;
  isFrontPage?: boolean;
}

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (options: IGetPostsOptions, { getState }) => {
    const state: TState = getState();
    const { postsSort } = state.posts;
    const [sort, t] = postsSort.split(':');
    const response = await axios.get(
      `https://www.reddit.com/${
        options.isFrontPage ? 'best' : `r/${options.subreddit}`
      }${sort ? `/${sort}` : ''}.json?${
        options.after || options.page ? 'count=25' : ''
      }${options.page ? `&page=${options.page}` : ''}${
        options.after ? `&after=${options.after}` : ''
      }${t ? `&t=${t}` : ''}&raw_json=1`
    );
    return {
      response: response.data,
      currentSubreddit: options.subreddit,
      isFrontPage: options.isFrontPage,
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
    setPostsSort: (state, action: PayloadAction<string>) => {
      state.postsSort = action.payload;
    },
    setKeepCurrentSubreddit: (state, action: PayloadAction<boolean>) => {
      state.keepCurrentSubreddit = action.payload;
    },
  },
  extraReducers: {
    [getPosts.pending.toString()]: (
      state,
      action: {
        meta: {
          arg: {
            subreddit: string;
          };
        };
      }
    ) => {
      state.loading = true;
      state.error = false;
      state.subreddit = action.meta.arg.subreddit;
    },
    [getPosts.fulfilled.toString()]: (
      state,
      action: PayloadAction<{
        response: IRedditPostsResponce;
        currentSubreddit: string;
        isFrontPage?: boolean;
      }>
    ) => {
      action.payload.response.data.children.forEach((post): void => {
        if (state.postIDs.indexOf(post.data.id) === -1) {
          state.posts.push(post.data);
          state.postIDs.push(post.data.id);
        }
      });
      state.frontPageLoaded = action.payload.isFrontPage;
      state.loading = false;
      state.error = false;
      state.currentSubreddit = action.payload.currentSubreddit;
    },
  },
});

export const {
  clearPosts,
  setPostsSort,
  setKeepCurrentSubreddit,
} = posts.actions;

export default posts;
