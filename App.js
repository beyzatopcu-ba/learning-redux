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
import UserList from './Components/UserList';

console.clear();
const {store} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
};

export default App;
