import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TState } from '../../store';
import { getPosts } from '../../store/posts/posts';

import PostItem from './PostItem';

const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: TState) => state.posts.posts);
  useEffect((): void => {
    dispatch(getPosts('all'));
  });
  return (
    <div className="Posts">
      <p>Posts</p>
      <ul>
        {posts.map((post) => (
          <PostItem
            key={post.data.id}
            title={post.data.title}
            author={post.data.author}
            subreddit={post.data.subreddit_name_prefixed}
          />
        ))}
      </ul>
    </div>
  );
};

export default Posts;
