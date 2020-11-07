import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { kBackgroundColour, kMainColour, kSecondaryBackgroundColour } from '../../utils/styles';

const Home = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={kBackgroundColour} />
      <View style={[styles.body, {backgroundColor: kBackgroundColour}]}>
        <ScrollView style={styles.scrollView}>
          <Text style={[styles.title, {color: kMainColour}]}>Projects</Text>
          <View style={styles.cards}>
            <TouchableOpacity onPress={() => navigation.navigate('/notifications')}>
              <View style={[styles.card, {backgroundColor: kSecondaryBackgroundColour}]}>
                <Text style={styles.cardTitle}>Notifications</Text>
                <Text style={styles.cardSubtitle}>Local notification using react-native-push-notification package.</Text>
              </View>
            </TouchableOpacity>
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
    justifyContent: 'flex-start'
  },
  title: {
    marginVertical: 20,
    fontFamily: 'SpaceGrotesk',
    fontSize: 28,
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
    borderRadius: 5
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

export default Home;
