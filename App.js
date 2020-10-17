/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.body}>
        <Text style={styles.text}>React Native project to practise push notification and background execution</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#FD4949",
    padding: 60,
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    color: "#FFFFFF"
  }
});

export default App;
