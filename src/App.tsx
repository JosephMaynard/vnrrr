import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Posts from './components/Posts/Posts';

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Posts />
    </Provider>
  );
};

export default App;
