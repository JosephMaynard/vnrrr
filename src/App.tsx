import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Posts from './components/Posts/Posts';

function App() {
  return (
    <Provider store={store}>
      <Posts />
    </Provider>
  );
}

export default App;
