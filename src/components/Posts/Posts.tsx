import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { TState } from '../../store';
import {
  getPosts,
  clearPosts,
  setKeepCurrentSubreddit,
} from '../../store/posts/posts';
import { setPost } from '../../store/comments/comments';
import { setShowComments } from '../../store/ui/ui';
import { IRedditPostData } from '../../store/api-types';

import Layout from '../Layout/Layout';
import PostItem from './PostItem';
import CommentsRouter from '../Comments/CommentsRouter';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import LoadMore from '../LoadMore/LoadMore';

import './styles/index.scss';

export interface IParamTypes {
  subreddit: string;
}

export interface IProps {
  isFrontPage?: boolean;
}

const Posts: React.FC<IProps> = ({ isFrontPage }: IProps) => {
  let { subreddit } = useParams<IParamTypes>();
  const dispatch = useDispatch();
  const {
    posts,
    loading,
    currentSubreddit,
    keepCurrentSubreddit,
    showComments,
    frontPageLoaded,
  } = useSelector((state: TState) => ({ ...state.posts, ...state.ui }));
  const [page, setPage] = useState(1);
  const refresh = (): void => {
    dispatch(clearPosts());
    dispatch(getPosts({ subreddit, isFrontPage }));
    dispatch(setKeepCurrentSubreddit(false));
  };
  const initialLoad = (): void => {
    if (
      posts.length > 0 &&
      ((isFrontPage === true && frontPageLoaded === true) ||
        keepCurrentSubreddit === true ||
        currentSubreddit === subreddit)
    ) {
      dispatch(setKeepCurrentSubreddit(false));
    } else {
      refresh();
    }
  };
  useEffect(initialLoad, [
    subreddit,
    currentSubreddit,
    isFrontPage,
    frontPageLoaded,
    keepCurrentSubreddit,
  ]);
  const getMorePosts = (): void => {
    if (!loading) {
      dispatch(
        getPosts({
          subreddit,
          page: page + 1,
          after: posts[posts.length - 1].name,
          isFrontPage: isFrontPage || frontPageLoaded,
        })
      );
      setPage(page + 1);
    }
  };
  const commentsOnClick = (post: IRedditPostData) => (): void => {
    dispatch(setPost(post));
    dispatch(setKeepCurrentSubreddit(true));
    dispatch(setShowComments(true));
  };
  return (
    <Layout
      title={isFrontPage ? 'Frontpage' : `r/${subreddit}`}
      refresh={refresh}
    >
      {loading && posts.length === 0 ? (
        <LoadingScreen text="Loading posts" className="Posts_loadingScreen" />
      ) : (
        <div className={`Posts${showComments ? ' Posts_showComments' : ''}`}>
          <ul className="Posts_ul">
            {posts.map((post) => (
              <PostItem
                key={post.name}
                post={post}
                commentsOnClick={commentsOnClick(post)}
              />
            ))}
          </ul>
          <LoadMore
            text="Get More Posts"
            getMore={getMorePosts}
            loading={loading}
          />
        </div>
      )}
      <CommentsRouter showComments={showComments} />
    </Layout>
  );
};

export default Posts;
