import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { TState } from '../../store';
import { getPosts, clearPosts } from '../../store/posts/posts';

import PostItem from './PostItem';

export interface IParamTypes {
  subreddit: string;
}

const Posts: React.FC = () => {
  let { subreddit } = useParams<IParamTypes>();
  const dispatch = useDispatch();
  const posts = useSelector((state: TState) => state.posts.posts);
  useEffect((): void => {
    dispatch(clearPosts());
    dispatch(getPosts(subreddit));
  }, [subreddit]);
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
