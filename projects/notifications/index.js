import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import PushNotification from 'react-native-push-notification';

const Notifications = () => {
  useEffect(() => {
    PushNotification.getChannels(function (channel_ids) {
      console.log(channel_ids); // ['channel_id_1']
    });
  }, []);

  const notify = () => {
    console.log('useEffect started');
    PushNotification.localNotification({
      channelId: 'default-channel-id',
      title: 'hello',
      message: 'world',
    });
    console.log('useEffect finished');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <Text style={styles.text}>
          React Native project to practise local notification
        </Text>
        <TouchableOpacity onPress={() => notify()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Notify!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#292830',
    padding: 60,
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    color: '#18B6EC',
  },
  button: {
    backgroundColor: '#18B6EC',
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontSize: 17,
  },
});

export default Notifications;