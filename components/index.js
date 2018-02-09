export { default as Login } from './Login';
export { default as List } from './List';

import React, { Component } from 'react';
import {
  Platform,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { AppScreens } from '../navigation/router.js';
import store from '../store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppScreens />
      </Provider>
    );
  }
}