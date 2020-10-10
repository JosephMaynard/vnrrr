import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { TState } from '../../store';
import { getPosts, clearPosts } from '../../store/posts/posts';

import PostItem from './PostItem';

import './styles/index.scss';

export interface IParamTypes {
  subreddit: string;
}

const Posts: React.FC = () => {
  let { subreddit } = useParams<IParamTypes>();
  const dispatch = useDispatch();
  const posts = useSelector((state: TState) => state.posts.posts);
  const [page, setPage] = useState(1);
  useEffect((): void => {
    dispatch(clearPosts());
    dispatch(getPosts({ subreddit }));
  }, [subreddit]);
  const getMorePosts = (): void => {
    dispatch(
      getPosts({
        subreddit,
        page: page + 1,
        after: posts[posts.length - 1].name,
      })
    );
    setPage(page + 1);
  };
  return (
    <div className="Posts">
      <p>Posts</p>
      <ul>
        {posts.map((post) => (
          <PostItem
            key={post.name}
            title={post.title}
            author={post.author}
            subreddit={post.subreddit_name_prefixed}
          />
        ))}
      </ul>
      <button onClick={getMorePosts} type="button">
        Get More Posts
      </button>
    </div>
  );
};

export default Posts;
