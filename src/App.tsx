import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Posts from './components/Posts/Posts';

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/r/:subreddit">
          <Posts />
        </Route>
        <Redirect to="/r/all" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
