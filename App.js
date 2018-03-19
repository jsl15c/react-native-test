// Obit App
// Jarrod Luca
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
// allows routing in react-native
import {StackNavigator} from 'react-navigation';

// Components to import
import HomeScreen from './components/home';
import LoginScreen from './components/login';
import MainScreen from './components/main';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: LoginScreen
    },
    Main: {
      screen: MainScreen
    }
  },
  {
    initialRouteName: 'Login',
  }
);

export default class ObitApp extends Component {
  render() {
    return (
      <RootStack/>
    );
  }
}
