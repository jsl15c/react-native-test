import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  Input,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const s = require('../styles/stylesheet');

export default class MainScreen extends Component {
  render() {
    const logo = require('../assets/images/logo.png');
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width;
    return (
      <View style={s.default_bg}>
        <View style={{justifyContent:'flex-start', alignItems:'center'}}>
          <Image
            source={logo}
            style={{
              resizeMode: 'contain',
              width: imageWidth/2,
            }}
          />
          </View>
          <View style={{alignItems:'flex-start', justifyContent:'flex-start',padding:20}}>
            <Text style={s.inputLabel}>Email address</Text>
            <TextInput
              style={s.inputField}
              placeholderTextColor='#fff'
              />
              <Text style={s.inputLabel}>Password</Text>
              <TextInput
                style={s.inputField}
                placeholderTextColor='#fff'
              />
              <View style={s.loginButton}>
                <Button
                  color='#fff'
                  title="Log In"
                  onclick="login()"
                />
              </View>
          </View>
      </View>
    );
  }
}
