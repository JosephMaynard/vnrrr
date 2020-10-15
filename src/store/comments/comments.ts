import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ICommentsReducer } from './types';
import { TRedditCommentsResponse, IRedditPostData } from '../api-types';

const initialState: ICommentsReducer = {
  postLoaded: false,
  post: null,
  commentsLoaded: false,
  comments: null,
  error: false,
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
    return {
      response: response.data,
      postId: options.postId,
    };
  }
);

const comments = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<IRedditPostData>) => {
      state.post = action.payload;
      state.postLoaded = true;
    },
    clearComments: (state, action: PayloadAction<string>) => {
      if (action.payload !== state.post?.id) {
        state.postLoaded = false;
        state.post = null;
      }
      state.error = false;
      state.commentsLoaded = false;
      state.comments = null;
    },
  },
  extraReducers: {
    [getComments.rejected.toString()]: (state) => {
      state.error = true;
    },
    [getComments.pending.toString()]: (
      state,
      action: {
        meta: {
          arg: {
            postId: string;
            subreddit: string;
          };
        };
      }
    ) => {
      console.log('🎇', state.post, action.meta.arg.postId, state.post?.id);
      if (state.post && action.meta.arg.postId === state.post.id) {
        state.postLoaded = true;
      } else {
        state.postLoaded = false;
        state.post = null;
      }
      state.error = false;
      state.commentsLoaded = false;
      state.comments = null;
    },
    [getComments.fulfilled.toString()]: (
      state,
      action: PayloadAction<{
        response: TRedditCommentsResponse;
        postId: string;
      }>
    ) => {
      state.error = false;
      state.commentsLoaded = true;
      state.comments = action.payload.response[1].data.children;
      state.post = action.payload.response[0].data.children[0].data;
      state.postLoaded = true;
    },
  },
});

export const { clearComments, setPost } = comments.actions;

export default comments;
