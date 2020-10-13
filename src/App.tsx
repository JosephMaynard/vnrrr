import React, { useCallback, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setScreenProperties } from './store/ui/ui';
import { getScreenProperties } from './utils/get-screen-properties';

import Posts from './components/Posts/Posts';
import Logo from './components/Logo/Logo';

const App: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const getAndSetScreenProperties = (): void => {
    dispatch(setScreenProperties(getScreenProperties()));
  };
  const getAndSetScreenPropertiesCallback = useCallback(
    getAndSetScreenProperties,
    []
  );
  useEffect(() => {
    getAndSetScreenPropertiesCallback();
    window.addEventListener('resize', getAndSetScreenPropertiesCallback);
    return () => {
      window.removeEventListener('resize', getAndSetScreenPropertiesCallback);
    };
  }, [getAndSetScreenPropertiesCallback]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/r/:subreddit">
          <Posts />
        </Route>
        <Route path="/logo">
          <div className="Logo_previewWrapper">
            <Logo state="loading" />
          </div>
        </Route>
        <Redirect to="/r/all" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
