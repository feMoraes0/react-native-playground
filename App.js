import React from 'react';
import {StatusBar} from 'react-native';
import MenuAnimation from './src/screens';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <MenuAnimation />
    </>
  );
};

export default App;
