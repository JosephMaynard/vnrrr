import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Comments from './Comments';

const CommentsRouter: React.FC = (): JSX.Element => {
  let { path } = useRouteMatch();
  return (
    <div className="CommentsRouter">
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
