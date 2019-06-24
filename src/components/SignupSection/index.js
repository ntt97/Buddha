import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions,TouchableOpacity} from 'react-native';

export default class SignupSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress ={()=>this.props.navigation.navigate("Register")}><Text style={styles.text}>Create Account</Text></TouchableOpacity>
        
        <TouchableOpacity onPress ={()=>this.props.navigation.navigate("Reset")}><Text style={styles.text}>Forgot Password?</Text></TouchableOpacity>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 60,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
})