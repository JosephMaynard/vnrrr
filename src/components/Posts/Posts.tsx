import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';

import { TState } from '../../store';
import { getPosts, clearPosts } from '../../store/posts/posts';

import Layout from '../Layout/Layout';
import PostItem from './PostItem';
import CommentsRouter from '../Comments/CommentsRouter';

import './styles/index.scss';

export interface IParamTypes {
  subreddit: string;
  postId?: string;
}

const Posts: React.FC = () => {
  let { subreddit } = useParams<IParamTypes>();
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state: TState) => state.posts);
  const [page, setPage] = useState(1);
  const refresh = (): void => {
    dispatch(clearPosts());
    dispatch(getPosts({ subreddit }));
  };
  useEffect(refresh, [subreddit]);
  const getMorePosts = (): void => {
    if (!loading) {
      dispatch(
        getPosts({
          subreddit,
          page: page + 1,
          after: posts[posts.length - 1].name,
        })
      );
      setPage(page + 1);
    }
  };
  return (
    <Layout subreddit={subreddit} refresh={refresh}>
      <div className={`Posts${false ? ' Posts_showComments' : ''}`}>
        <ul className="Posts_ul">
          {posts.map((post) => (
            <PostItem key={post.name} post={post} />
          ))}
        </ul>
        <Waypoint onEnter={getMorePosts} />
        <button onClick={getMorePosts} type="button" disabled={loading}>
          Get More Posts
        </button>
      </div>
      <CommentsRouter />
    </Layout>
  );
};

export default Posts;
