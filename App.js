/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';

import configureStore  from './Redux/ReduxManager';

import Home from './Components/Home';
import HomeEgzersiz from './Components/HomeEgzersiz';
import HomeList from './Components/HomeList';

const {store} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
