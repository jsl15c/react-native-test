import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlastList
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{},
      obits:[]
    };
  }

  componentDidMount() {
    const params = this.props.navigation.state.params;
    this.setState({user:params.user});
    this.setState({obits:params.user.obits});
  }

  render() {
  // const listItems = this.state.obits.map((obit) => {
  //   return <Text style={{flexDirection:'column'}}>{obit.firstName}</Text>;
  // });

    return (
      <FlatList
        data={[this.obits]}
        renderItem={({obits}) => <Text>{obits.firstName}</Text>}
      />
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text style={{color:"red"}}>{this.state.user.fullName}</Text>
      //   <Text style={{color:"blue"}}>{listItems}</Text>
      // </View>
    );
  }
}
