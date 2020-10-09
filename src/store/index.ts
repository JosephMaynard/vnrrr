import { configureStore } from '@reduxjs/toolkit';

import posts from './posts/posts';

const reducer = {
  posts: posts.reducer,
};

export default configureStore({ reducer });
