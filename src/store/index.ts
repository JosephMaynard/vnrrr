import { combineReducers, configureStore } from '@reduxjs/toolkit';

import posts from './posts/posts';

const rootReducer = combineReducers({
  posts: posts.reducer,
});

export default configureStore({ reducer: rootReducer });
