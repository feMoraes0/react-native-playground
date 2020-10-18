import PushNotification from 'react-native-push-notification';

const show = (title, message) => {
  PushNotification.localNotification({
    title: title,
    message: message,
  });
};

export {show};
