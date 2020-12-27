import React from 'react';
import {SafeAreaView, View, TouchableOpacity, StyleSheet} from 'react-native';
import Menu from '../../assets/icons/menu.svg';

const MenuAnimation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Menu color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  header: {
    paddingHorizontal: 15.0,
  },
  text: {
    fontSize: 18.0,
    color: '#333',
    fontFamily: 'SpaceGrotesk',
  },
});

export default MenuAnimation;
