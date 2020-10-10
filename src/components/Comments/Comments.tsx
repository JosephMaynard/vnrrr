import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { TState } from '../../store';
import { getComments, clearComments } from '../../store/comments/comments';

export interface IParamTypes {
  subreddit: string;
  postId: string;
}

const Comments: React.FC = (): JSX.Element => {
  let { subreddit, postId } = useParams<IParamTypes>();
  const dispatch = useDispatch();
  useEffect((): void => {
    dispatch(clearComments());
    dispatch(getComments({ subreddit, postId }));
  }, [postId]);
  return <div className="Comments">Post ID: {postId}</div>;
};

export default Comments;
