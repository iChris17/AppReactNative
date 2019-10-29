/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import UserNavigation from './app/navigations/User';

import firebaseConfig from './app/utils/firebase';
import * as firebase from 'firebase';

firebase.initializeApp(firebaseConfig);

const App: () => React$Node = () => {
  return (
   <View style={styles.container}> 
     <UserNavigation/>
   </View>
  ); 
};

const styles = StyleSheet.create({
  container:{
    flex:1   
  }
}); 

export default App;
