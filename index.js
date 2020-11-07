/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';
import {Platform} from 'react-native';



PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },
  onNotification: function (notification) {
    console.log('triggered');

    if (notification.action === 'Take') {
      console.log('hey1');
    } else if (notification.action === 'Skip') {
      console.log('hey2');
    } else if (notification.action === 'Snooze') {
      console.log('hey3');
    }
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios',
});

AppRegistry.registerComponent(appName, () => App);
