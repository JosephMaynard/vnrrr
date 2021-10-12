import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { TState } from '../../store';
import {
  getComments,
  clearComments,
  getMoreComments,
} from '../../store/comments/comments';
import { setShowComments } from '../../store/ui/ui';

import CommentBlock from './CommentBlock';
import SVGIcon from '../SVGIcon/SVGIcon';
import HTLMBlock from '../HTMLBlock/HTMLBlock';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import Preview from '../Preview/Preview';
import Timestamp from '../Timestamp/Timestamp';
import LoadMore from '../LoadMore/LoadMore';

import './styles/index.scss';
import { IRedditPost } from '../../store/api-types';

export interface IParamTypes {
  subreddit: string;
  postId: string;
}

const Comments: React.FC = (): JSX.Element => {
  let { subreddit, postId } = useParams<IParamTypes>();
  const {
    comments,
    post,
    postLoaded,
    commentsLoaded,
    loadingMoreComments,
  } = useSelector((state: TState) => state.comments);
  const dispatch = useDispatch();
  const loadComments = (): void => {
    dispatch(clearComments(postId));
    dispatch(getComments({ subreddit, postId }));
    dispatch(setShowComments(true));
  };
  useEffect(loadComments, [subreddit, postId]);
  const commentsRef = useRef<HTMLDivElement>(null);
  const scrollUp = (): void => {
    commentsRef.current?.scrollTo({
      top: commentsRef.current.scrollTop + 53,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div ref={commentsRef} className="Comments">
      {!postLoaded || !post ? (
        <LoadingScreen text="Loading comments" />
      ) : (
        <>
          <h2 className="Comments_title">{post.title}</h2>
          {(post.preview || (post.gallery_data && post.media_metadata)) && (
            <Preview post={post} />
          )}
          <div className="Comments_header">
            <p className="Comments_postInfo">
              <span className="Comments_postInfo_author">{post.author}</span>
              <Link
                className="Comments_postInfo_link"
                to={`/r/${post.subreddit}`}
              >
                r/{post.subreddit}
              </Link>
              <span>
                <Timestamp
                  createdUTC={post.created_utc}
                  className="Comments_postInfo_timestamp"
                  showFullTime
                />
              </span>
            </p>
            {post.domain.split('.')[0] !== 'self' && (
              <a
                href={post.url}
                className="Comments_header_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVGIcon icon="launch" className="Comments_header_link_icon" />
                {post.url}
              </a>
            )}
            <a
              href={`https://reddit.com${post.permalink}`}
              className="Comments_header_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SVGIcon icon="launch" className="Comments_header_link_icon" />
              {`https://reddit.com${post.permalink}`}
            </a>
          </div>
          {post.selftext_html && (
            <HTLMBlock
              className="Comments_selftext"
              html={post.selftext_html}
            />
          )}
          {commentsLoaded && comments ? (
            <div className="Comments_commentBlocks_wrapper">
              {comments.map(
                (comment: IRedditPost): JSX.Element =>
                  comment.kind === 'more' && comment.data.children ? (
                    <LoadMore
                      key={comment.data.name}
                      text={`Get ${comment.data.count || 0} more comments`}
                      loading={loadingMoreComments}
                      getMore={(): void => {
                        dispatch(
                          getMoreComments({
                            children: comment.data.children?.slice(0, 10) || [],
                            moreId: comment.data.name,
                            postId: post.name,
                          })
                        );
                      }}
                    />
                  ) : (
                    <CommentBlock
                      key={comment.data.name}
                      scrollUp={scrollUp}
                      comment={comment}
                    />
                  )
              )}
            </div>
          ) : (
            <LoadingScreen
              className="Comments_commentBlocks_loading"
              text="Loading comments"
            />
          )}
        </>
      )}
    </div>
  );
};

export default Comments;
