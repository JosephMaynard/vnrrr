import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IRedditPost, IPostsReducer } from './types';

const initialState: IPostsReducer = {
  loading: true,
  posts: [],
  postIDs: [],
}

const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{posts: IRedditPost[]}>) => {
      action.payload.posts.forEach((post): void => {
        if (state.postIDs.indexOf(post.data.id) === -1) {
          state.posts.push(post);
          state.postIDs.push(post.data.id);
        }
      })
    }
  }
});

export default posts;
