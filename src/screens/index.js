import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import Menu from '../../assets/icons/menu.svg';
import Home from '../../assets/icons/home.svg';
import Camera from '../../assets/icons/camera.svg';
import Adjustments from '../../assets/icons/adjustments.svg';
import Karate from '../../assets/icons/karate.svg';
import Atom from '../../assets/icons/atom.svg';
import Cube from '../../assets/icons/cube.svg';
import Alien from '../../assets/icons/alien.svg';
import Castle from '../../assets/icons/castle.svg';
import Close from '../../assets/icons/close.svg';

const MenuAnimation = () => {
  const rotation = new Animated.Value(0);

  const closeMenu = () => {
    Animated.timing(rotation, {
      toValue: 1.6,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const openMenu = () => {
    Animated.timing(rotation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => openMenu()}>
          <Menu color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => closeMenu()}>
          <Animated.View
            style={[
              styles.menuItem,
              {
                transform: [
                  {
                    translateX: rotation.interpolate({
                      inputRange: [0, 1.6],
                      outputRange: [0, -40.0],
                    }),
                  },
                  {
                    rotateY: rotation,
                  },
                ],
              },
            ]}>
            <Close color="#FD4949" />
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Animated.View
            style={[
              styles.menuItem,
              {
                transform: [
                  {
                    translateX: rotation.interpolate({
                      inputRange: [0, 1.6],
                      outputRange: [0, -40.0],
                    }),
                  },
                  {
                    rotateY: rotation,
                  },
                ],
              },
            ]}>
            <Home color="#FD4949" />
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.menuItem}>
            <Camera color="#FD4949" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.menuItem}>
            <Adjustments color="#FD4949" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.menuItem}>
            <Karate color="#FD4949" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.menuItem}>
            <Atom color="#FD4949" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.menuItem}>
            <Cube color="#FD4949" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.menuItem}>
            <Alien color="#FD4949" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.menuItem}>
            <Castle color="#FD4949" />
          </View>
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
    backgroundColor: '#F7F7F7',
  },
  header: {
    paddingHorizontal: 15.0,
  },
  menu: {
    height: '100%',
    width: 80.0,
    marginTop: 50.0,
    position: 'absolute',
  },
  menuItem: {
    paddingVertical: 30.2,
    alignItems: 'center',
    backgroundColor: '#292830',
  },
});

export default MenuAnimation;
