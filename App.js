/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';

import { store } from './Redux/ReduxManager';

import Home from './Components/Home';
import HomeEgzersiz from './Components/HomeEgzersiz';

const App = () => {
  return (
    <Provider store={store}>
      <HomeEgzersiz />
    </Provider>
  );
};

export default App;
