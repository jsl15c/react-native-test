// Obit App
// Jarrod Luca
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  navigation,
  navigationOptions
} from 'react-native';
// allows routing in react-native
import {StackNavigator} from 'react-navigation';

// Components to import
import HomeScreen from './components/home';
import SignupScreen from './components/signup';
import LoginScreen from './components/login';
import MainScreen from './components/main';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Signup: {
      screen: SignupScreen
    },
    Login: {
      screen: LoginScreen
    },
    Main: {
      screen: MainScreen
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
    initialRouteName:'Signup'
  }
);

export default class ObitApp extends Component {
  render() {
    return (
      <RootStack/>
    );
  }
}
