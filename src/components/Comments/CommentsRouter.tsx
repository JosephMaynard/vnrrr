import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Comments from './Comments';
import SelectPost from './SelectPost';

export interface IProps {
  showComments?: boolean;
}

const CommentsRouter: React.FC<IProps> = ({
  showComments,
}: IProps): JSX.Element => {
  let { path } = useRouteMatch();
  return (
    <div
      className={`CommentsRouter${
        showComments ? ' CommentsRouter_showComments' : ''
      }`}
    >
      <Switch>
        <Route path={`${path}/comments/:postId`}>
          <Comments />
        </Route>
        <Route>
          <SelectPost />
        </Route>
      </Switch>
    </div>
  );
};

export default CommentsRouter;
