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
  postID: string;
}

export const getComments = createAsyncThunk(
  'comments/getComments',
  async (options: IGetCommentsOptions) => {
    const response = await axios.get(
      `https://www.reddit.com/r/${options.subreddit}/comments/${options.postID}.json`
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
    },
    [getComments.fulfilled.toString()]: (
      state,
      action: PayloadAction<IRedditCommentsResponce>
    ) => {
      action.payload.data.children.forEach((post): void => {
        state.comments = post.data;
        state.loading = false;
        state.error = false;
      });
    },
  },
});

export const { clearComments } = comments.actions;

export default comments;
