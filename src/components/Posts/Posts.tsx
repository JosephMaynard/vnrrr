import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { TState } from '../../store';
import { getPosts, clearPosts } from '../../store/posts/posts';

import Layout from '../Layout/Layout';
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
  const refresh = (): void => {
    dispatch(clearPosts());
    dispatch(getPosts({ subreddit }));
  };
  useEffect((): void => {
    refresh();
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
    <Layout subreddit={subreddit} refresh={refresh}>
      <div className="Posts">
        <ul className="Posts_ul">
          {posts.map((post) => (
            <PostItem key={post.name} post={post} />
          ))}
        </ul>
        <button onClick={getMorePosts} type="button">
          Get More Posts
        </button>
      </div>
    </Layout>
  );
};

export default Posts;
