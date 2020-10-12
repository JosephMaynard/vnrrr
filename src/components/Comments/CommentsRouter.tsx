import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Comments from './Comments';

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
          <div className="CommentsRouter_selectPost">
            <p>Select a post.</p>
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default CommentsRouter;
