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
          <p>Select story</p>
        </Route>
      </Switch>
    </div>
  );
};

export default CommentsRouter;
