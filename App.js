import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/home';
import Notifications from './src/screens/notifications';
import { kBackgroundColour, kFontFamily, kMainColour } from './src/utils/styles'

const { Navigator, Screen } = createStackNavigator();

const App = () => {
  const screenOptions = (title) => {
    return {
      title: title,
      headerStyle: {
        backgroundColor: kBackgroundColour,
        elevation: 0
      },
      headerTitleStyle: {
        fontFamily: kFontFamily
      },
      headerTintColor: kMainColour,
    }
  }

  return (
    <NavigationContainer>
      <Navigator initialRouteName="/">
        <Screen
          name="/"
          component={Home}
          options={{
            header: () => {}
          }}
        ></Screen>
        <Screen
          name="/notifications"
          component={Notifications}
          options={screenOptions('Notifications')}
        ></Screen>
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
