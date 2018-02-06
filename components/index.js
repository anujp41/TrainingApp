export { default as Login } from './Login';
export { default as List } from './List';

import React, { Component } from 'react';
import {
  Platform,
  View
} from 'react-native';
import { AppScreens } from '../navigation/router.js';

export default class App extends Component {
  render() {
    return (
        <AppScreens />
    );
  }
}