import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../store/posts/posts';

function App() {
  const dispatch = useDispatch();
  useEffect((): void => {
    dispatch(getPosts());
  });
  return (
    <div className="Posts">
      <p>Posts</p>
    </div>
  );
}

export default App;
