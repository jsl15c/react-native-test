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

type Props = {};
export default class ObitApp extends Component<Props> {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'royalblue'
      }}>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text>Hello world!</Text>
      </View>
    );
  }
}
