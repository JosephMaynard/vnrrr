import { configureStore } from '@reduxjs/toolkit';

import posts from './posts/posts';

const reducer = {
  posts: posts.reducer,
};

const store = configureStore({ reducer });

export type TState = ReturnType<typeof store.getState>;

export default store;
