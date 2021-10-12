import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

import { TState } from '../../store';
import { getPosts, clearPosts } from '../../store/posts/posts';
import { setPost } from '../../store/comments/comments';
import { setShowComments } from '../../store/ui/ui';
import { IRedditPostData } from '../../store/api-types';

import Layout from '../Layout/Layout';
import PostItem from './PostItem';
import CommentsRouter from '../Comments/CommentsRouter';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import LoadMore from '../LoadMore/LoadMore';

import './styles/index.scss';
import { useQuery } from '../../utils/useQuery';

export interface IParamTypes {
  subreddit: string;
  sort?: string;
}

export interface IProps {
  isFrontPage?: boolean;
}

export interface IRouterState {
  currentSubreddit?: string;
}

const Posts: React.FC<IProps> = ({ isFrontPage }: IProps) => {
  let { subreddit, sort } = useParams<IParamTypes>();
  const query = useQuery();
  const t = query.get('t');
  const routerState: IRouterState = useLocation<IRouterState>().state;
  const dispatch = useDispatch();
  const {
    posts,
    post,
    loading,
    currentSubreddit,
    showComments,
    frontPageLoaded,
  } = useSelector((state: TState) => ({
    ...state.posts,
    ...state.comments,
    ...state.ui,
  }));

  const [page, setPage] = useState(1);
  const refresh = (): void => {
    dispatch(clearPosts());
    dispatch(getPosts({ subreddit, isFrontPage, sort, t }));
  };
  const initialLoad = useCallback((): void => {
    if (
      !(
        posts.length > 0 &&
        ((isFrontPage === true && frontPageLoaded === true) ||
          (routerState && currentSubreddit === routerState.currentSubreddit) ||
          currentSubreddit === subreddit)
      )
    ) {
      refresh();
    }
  }, [
    posts,
    isFrontPage,
    frontPageLoaded,
    currentSubreddit,
    subreddit,
    sort,
    t,
  ]);
  useEffect(initialLoad, [subreddit, isFrontPage, currentSubreddit, sort, t]);
  useEffect(() => {
    if (sort !== 'comments') {
      document.title = isFrontPage
        ? 'Front Page - vnrrr.com'
        : `${subreddit} - vnrrr.com`;
    } else {
      document.title = `${post && post.title ? post.title : ''}${
        post && post.subreddit ? ` - ${post.subreddit}` : ''
      }  - vnrrr.com`;
    }
  }, [subreddit, isFrontPage, sort, t, post]);
  const getMorePosts = (): void => {
    if (!loading) {
      dispatch(
        getPosts({
          subreddit,
          page: page + 1,
          after: posts[posts.length - 1].name,
          isFrontPage: isFrontPage || frontPageLoaded,
          sort,
          t: query.get('t'),
        })
      );
      setPage(page + 1);
    }
  };
  const commentsOnClick = (post: IRedditPostData) => (): void => {
    dispatch(setPost(post));
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
            {posts.map((post: IRedditPostData) => (
              <PostItem
                key={post.name}
                post={post}
                currentSubreddit={currentSubreddit}
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
