import { configureStore } from '@reduxjs/toolkit';

import posts from './posts/posts';
import comments from './comments/comments';

const reducer = {
  posts: posts.reducer,
  comments: comments.reducer,
};

const store = configureStore({ reducer });

export type TState = ReturnType<typeof store.getState>;

export default store;
