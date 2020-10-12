import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Posts from './components/Posts/Posts';

import Logo from './components/Logo/Logo';

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/r/:subreddit">
          <Posts />
        </Route>
        <Route path="/logo">
          <div className="Logo_previewWrapper">
            <Logo />
          </div>
        </Route>
        <Redirect to="/r/all" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
