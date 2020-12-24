import React from 'react';
import {StatusBar} from 'react-native';
import Scaffold from './src/screens';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Scaffold />
    </>
  );
};

export default App;
