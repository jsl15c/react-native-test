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

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state={
      email:'',
      password:'',
      error:''
    };
  }

  render() {
    const { navigate } = this.props.navigation;
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
              onChangeText={(text) => this.setState({email:text})}
              />
              <Text style={s.inputLabel}>Password</Text>
              <TextInput
                style={s.inputField}
                placeholderTextColor='#fff'
                onChangeText={(text) => this.setState({password:text})}
              />
              <View style={s.loginButton}>
                <Button
                  color='#fff'
                  title="Log In"
                  onPress={()=>this.login()}
                />
              </View>
              <Text style={s.errorMsg}>{this.state.error}</Text>
          </View>
      </View>
    );
  }

  login() {
    const {navigate} = this.props.navigation;
    return fetch('http://localhost:3000/user-api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then((res) => res.json())
    .then((resultFromApi) => {
      if (resultFromApi.error) {
        this.setState({error:resultFromApi.error.message})
        return;
      }
      navigate('Home', {user:resultFromApi});
    })
    // error
    .catch((err) => {
      this.setState({error:err})
      console.error(err);
    });
  }

}
