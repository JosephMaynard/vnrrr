import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { TState } from '../../store';
import { getComments, clearComments } from '../../store/comments/comments';
import { setShowComments } from '../../store/ui/ui';

import CommentBlock from './CommentBlock';
import SVGIcon from '../SVGIcon/SVGIcon';
import HTLMBlock from '../HTMLBlock/HTMLBlock';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import Preview from '../Preview/Preview';

import './styles/index.scss';

export interface IParamTypes {
  subreddit: string;
  postId: string;
}

const Comments: React.FC = (): JSX.Element => {
  let { subreddit, postId } = useParams<IParamTypes>();
  const { comments, post, loading } = useSelector(
    (state: TState) => state.comments
  );
  const dispatch = useDispatch();
  const loadComments = (): void => {
    dispatch(clearComments());
    dispatch(getComments({ subreddit, postId }));
    dispatch(setShowComments(true));
  };
  useEffect(loadComments, [subreddit, postId]);
  return (
    <div className="Comments">
      {loading && <LoadingScreen text="Loading comments" />}
      {!loading && post && comments && (
        <>
          <div className="Comments_header">
            <h2 className="Comments_title">{post.title}</h2>
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
          {post.preview && <Preview post={post} />}
          {post.selftext_html && (
            <HTLMBlock
              className="Comments_selftext"
              html={post.selftext_html}
            />
          )}
          <div className="Comments_commentBlocksWrapper">
            {comments.map(
              (comment): JSX.Element => (
                <CommentBlock comment={comment} />
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Comments;
