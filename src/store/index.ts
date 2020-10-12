import { configureStore } from '@reduxjs/toolkit';

import posts from './posts/posts';
import comments from './comments/comments';
import ui from './ui/ui';

const reducer = {
  posts: posts.reducer,
  comments: comments.reducer,
  ui: ui.reducer,
};

const store = configureStore({ reducer });

export type TState = ReturnType<typeof store.getState>;

export default store;
