import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  default_bg: {
    flex: 1,
    backgroundColor:'#1D1F26',
  },
  inputLabel: {
    color:'#fff',
    fontSize:20,
    marginTop:10
  },
  errorMsg: {
    color:'red',
    fontSize:20,
    marginTop:20,
    height:40
  },
  inputField: {
    height: 40,
    fontSize:20,
    color:'#fff',
    borderColor:'#fff',
    borderWidth:2,
    alignSelf:'stretch'
  },
  loginButton: {
    height: 40,
    marginTop:20,
    borderColor:'#fff',
    borderWidth:2,
    alignSelf:'stretch',
    backgroundColor:'#42216F',
  }
});

module.exports = styles;
