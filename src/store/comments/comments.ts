import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ICommentsReducer } from './types';
import { TRedditCommentsResponse } from '../api-types';

const initialState: ICommentsReducer = {
  loading: true,
  error: false,
  postLoaded: false,
  post: null,
  commentsLoaded: false,
  comments: null,
};

export interface IGetCommentsOptions {
  subreddit: string;
  postId: string;
}

export const getComments = createAsyncThunk(
  'comments/getComments',
  async (options: IGetCommentsOptions) => {
    const response = await axios.get(
      `https://www.reddit.com/r/${options.subreddit}/comments/${options.postId}.json?raw_json=1`
    );
    return response.data;
  }
);

const comments = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    clearComments: (state) => {
      state.loading = true;
      state.error = false;
      state.commentsLoaded = false;
      state.comments = null;
      state.postLoaded = false;
      state.post = null;
    },
  },
  extraReducers: {
    [getComments.pending.toString()]: (state, action) => {
      console.log({ action });
      state.loading = true;
      state.error = false;
      state.commentsLoaded = false;
      state.comments = null;
    },
    [getComments.fulfilled.toString()]: (
      state,
      action: PayloadAction<TRedditCommentsResponse>
    ) => {
      state.loading = false;
      state.error = false;
      state.commentsLoaded = true;
      state.comments = action.payload[1].data.children;
      state.post = action.payload[0].data.children[0].data;
    },
  },
});

export const { clearComments } = comments.actions;

export default comments;
