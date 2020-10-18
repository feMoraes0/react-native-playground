import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

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
