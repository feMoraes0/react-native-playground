import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import PushNotification from 'react-native-push-notification';
import { kBackgroundColour, kFontFamily, kMainColour } from '../../utils/styles'

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
      <StatusBar barStyle="light-content" backgroundColor={kBackgroundColour} />
      <View style={[styles.body, {backgroundColor: kBackgroundColour}]}>
        <Text style={[styles.text, {fontFamily: kFontFamily, color: kMainColour}]}>
          Local notification
        </Text>
        <TouchableOpacity onPress={() => notify()}>
          <View style={[styles.button, {backgroundColor: kMainColour}]}>
            <Text style={[styles.buttonText, {fontFamily: kFontFamily, color: kBackgroundColour}]}>Notify!</Text>
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
    paddingHorizontal: 60,
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontSize: 18,
  },
});

export default Notifications;
