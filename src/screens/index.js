import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MenuAnimation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <Text style={styles.text}> Scaffold Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18.0,
    color: '#333',
    fontFamily: 'SpaceGrotesk',
  },
});

export default MenuAnimation;
