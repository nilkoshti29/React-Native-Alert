import React from 'react';
import { Text ,View ,Alert } from 'react-native';

export default class App extends React.Component {

  render() {

    Alert.alert('You tapped the Button!')
    return(

    <View>
        <Text> Hi!! I AM Alert Demo</Text>
    </View>
    )
  }
}