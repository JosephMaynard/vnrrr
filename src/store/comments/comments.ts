import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ICommentsReducer, TSortCommentsBy } from './types';
import { TState } from '../index';
import {
  TRedditCommentsResponse,
  IRedditPostData,
  IRedditGetMoreCommentsResponse,
} from '../api-types';

const initialState: ICommentsReducer = {
  postLoaded: false,
  post: null,
  commentsLoaded: false,
  comments: null,
  error: false,
  loadingMoreComments: false,
  commentsSort: '',
};

export interface IGetCommentsOptions {
  subreddit: string;
  postId: string;
}

export const getComments = createAsyncThunk(
  'comments/getComments',
  async (options: IGetCommentsOptions, { getState }) => {
    const state: TState = getState();
    const { commentsSort } = state.comments;
    const response = await axios.get(
      `https://www.reddit.com/r/${options.subreddit}/comments/${
        options.postId
      }.json?raw_json=1${commentsSort ? `&sort=${commentsSort}` : ''}`
    );
    return {
      response: response.data,
      postId: options.postId,
    };
  }
);

export interface IGetMoreCommentsOptions {
  children: string[];
  postId: string;
  moreId: string;
}

export const getMoreComments = createAsyncThunk(
  'comments/getMoreComments',
  async (options: IGetMoreCommentsOptions, { getState }) => {
    const state: TState = getState();
    const { commentsSort } = state.comments;
    const response = await axios.get(
      `https://www.reddit.com/api/morechildren.json?api_type=json&children=${options.children.join(
        '%2C'
      )}&link_id=${options.postId}&raw_json=1${
        commentsSort ? `&sort=${commentsSort}` : ''
      }`
    );
    return {
      response: response.data,
      postId: options.postId,
      moreId: options.moreId,
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
    setCommentsSort: (state, action: PayloadAction<TSortCommentsBy>) => {
      state.commentsSort = action.payload;
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
      state.postId = action.meta.arg.postId;
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
      if (!state.post) {
        state.post = action.payload.response[0].data.children[0].data;
      }
      state.postLoaded = true;
    },
    [getMoreComments.pending.toString()]: (state) => {
      state.loadingMoreComments = true;
    },
    [getMoreComments.fulfilled.toString()]: (
      state,
      action: PayloadAction<{
        response: IRedditGetMoreCommentsResponse;
        postId: string;
        moreId: string;
      }>
    ) => {
      const filteredComments = state.comments
        ? state.comments?.filter(
            (comment) => comment.data.name !== action.payload.moreId
          )
        : [];
      state.loadingMoreComments = false;
      state.comments = [
        ...filteredComments,
        ...action.payload.response.json.data.things,
      ];
    },
  },
});

export const { clearComments, setPost, setCommentsSort } = comments.actions;

export default comments;
