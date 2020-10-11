import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ICommentsReducer, IRedditCommentsResponce } from './types';

const initialState: ICommentsReducer = {
  loading: true,
  error: false,
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
      state.comments = null;
    },
  },
  extraReducers: {
    [getComments.pending.toString()]: (state) => {
      state.loading = true;
      state.error = false;
      state.comments = null;
    },
    [getComments.fulfilled.toString()]: (
      state,
      action: PayloadAction<IRedditCommentsResponce>
    ) => {
      state.comments = action.payload;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { clearComments } = comments.actions;

export default comments;
