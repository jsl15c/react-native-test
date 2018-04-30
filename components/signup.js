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
  Button,
  StatusBar
} from 'react-native';

const s = require('../styles/stylesheet');

export default class SignupScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullName:'',
      email:'',
      password:'',
      error:'',
    };
  }

  render() {
    const logo = require('../assets/images/logo.png');
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width;
    return (
      <View style={s.default_bg}>
      <StatusBar hidden={true}/>
        <View style={{alignItems:'center'}}>
          <Image
            source={logo}
            style={{
              resizeMode: 'contain',
              width: imageWidth/2
            }}
          />
          </View>
          <View style={{padding:20}}>
          <Text style={s.inputLabel}>Full Name</Text>
          <TextInput
            style={s.inputField}
            placeholderTextColor='#fff'
            onChangeText={(text) => this.setState({fullName:text})}
            />
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
                  title="Sign Up"
                  onPress={() => this.signup()}
                />
                </View>
                <View style={{
                  flexDirection:'row',
                  marginTop:5
                }}>
                  <Text style={s.inputLabel}>Already signed up?</Text>
                  <View style={{paddingTop:4}}>
                    <Button
                      color='lightblue'
                      title="Login"
                      onPress={()=>this.goToLogin()}
                    />
                  </View>
                  <Text style={s.errorMsg}>{this.state.error}</Text>
              </View>
          </View>
      </View>
    );
  }

  signup() {
    const {navigate} = this.props.navigation;
    return fetch('http://localhost:3000/user-api/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName:this.state.fullName,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then((res) => res.json())
    .then((resultFromApi) => {
      if (resultFromApi.error) {
        this.setState({error:resultFromApi.error})
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

  goToLogin() {
    const {navigate} = this.props.navigation;
    navigate('Login');
  }

// end class
}
