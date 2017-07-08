// index.android.js  - place code in here for Android

import React from 'react';
import { Text, AppRegistry } from 'react-native';

const App = () =>
  (
    <Text> Some Text </Text>
  );


AppRegistry.registerComponent('albums', () => App);
