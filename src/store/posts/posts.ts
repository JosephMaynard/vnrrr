import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IRedditPost, IPostsReducer, IRedditPostsResponce } from './types';

const initialState: IPostsReducer = {
  loading: true,
  posts: [],
  postIDs: [],
};

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const response = await axios.get('https://www.reddit.com/r/all.json');
  console.log(response.data);
  return response.data;
});

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
    [getPosts.fulfilled.toString()]: (
      state,
      action: PayloadAction<IRedditPostsResponce>
    ) => {
      console.log('ACTION', action);
      action.payload.data.children.forEach((post): void => {
        if (state.postIDs.indexOf(post.data.id) === -1) {
          state.posts.push(post);
          state.postIDs.push(post.data.id);
        }
      });
    },
  },
});

export default posts;
