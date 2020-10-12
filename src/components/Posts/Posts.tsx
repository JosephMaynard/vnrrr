import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';

import { TState } from '../../store';
import {
  getPosts,
  clearPosts,
  setKeepCurrentSubreddit,
} from '../../store/posts/posts';
import { setShowComments } from '../../store/ui/ui';

import Layout from '../Layout/Layout';
import PostItem from './PostItem';
import CommentsRouter from '../Comments/CommentsRouter';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

import './styles/index.scss';

export interface IParamTypes {
  subreddit: string;
  postId?: string;
}

const Posts: React.FC = () => {
  let { subreddit } = useParams<IParamTypes>();
  const dispatch = useDispatch();
  const {
    posts,
    loading,
    currentSubreddit,
    keepCurrentSubreddit,
    showComments,
  } = useSelector((state: TState) => ({ ...state.posts, ...state.ui }));
  const [page, setPage] = useState(1);
  const refresh = (): void => {
    dispatch(clearPosts());
    dispatch(getPosts({ subreddit }));
  };
  const initialLoad = (): void => {
    if (keepCurrentSubreddit === true || currentSubreddit === subreddit) {
      dispatch(setKeepCurrentSubreddit(false));
    } else {
      refresh();
    }
  };
  useEffect(initialLoad, [subreddit]);
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
  const commentsOnClick = (): void => {
    dispatch(setKeepCurrentSubreddit(true));
    dispatch(setShowComments(true));
  };
  return (
    <Layout subreddit={subreddit} refresh={refresh}>
      {loading && posts.length === 0 ? (
        <LoadingScreen text="Loading posts" className="Posts_loadingScreen" />
      ) : (
        <div className={`Posts${showComments ? ' Posts_showComments' : ''}`}>
          <ul className="Posts_ul">
            {posts.map((post) => (
              <PostItem
                key={post.name}
                post={post}
                commentsOnClick={commentsOnClick}
              />
            ))}
          </ul>
          <Waypoint onEnter={getMorePosts} />
          <button
            className="Posts_getMorePostsButton"
            onClick={getMorePosts}
            type="button"
            disabled={loading}
          >
            {loading ? 'Loading Posts....' : 'Get More Posts'}
          </button>
        </div>
      )}
      <CommentsRouter showComments={showComments} />
    </Layout>
  );
};

export default Posts;
