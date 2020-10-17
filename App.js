import React, {useEffect} from 'react';
import {StyleSheet, View, Text, StatusBar, Button} from 'react-native';
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
});

const App = () => {
  useEffect(() => {
    PushNotification.localNotification({
      title: 'Hello',
      message: 'World',
    });
  });

  testPushNotification = () => {
    console.log('Hello world 2');
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.body}>
        <Text style={styles.text}>
          React Native project to practise push notification and background
          execution
        </Text>
        <Button
          onPress={() => {
            testPushNotification();
          }}
          title={'hello world'}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FD4949',
    padding: 60,
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    color: '#FFFFFF',
  },
});

export default App;
