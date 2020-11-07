import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Notifications from './projects/notifications';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='#292830' />
      <View style={styles.body}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>Projects</Text>
          <View style={styles.cards}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Notifications</Text>
              <Text style={styles.cardSubtitle}>Local notification using react-native-push-notification package.</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#292830',
  },
  title: {
    marginVertical: 20,
    fontFamily: 'SpaceGrotesk',
    fontSize: 33,
    color: '#3FB350',
    textAlign: 'center',
  },
  scrollView: {
    alignSelf: 'stretch',
  },
  cards: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 15
  },
  card: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#212028'
  },
  cardTitle: {
    fontSize: 20,
    color: '#F2F2F2',
    marginBottom: 5,
    fontFamily: 'SpaceGrotesk',
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#808080',
    fontFamily: 'SpaceGrotesk',
  }
});

export default App;
