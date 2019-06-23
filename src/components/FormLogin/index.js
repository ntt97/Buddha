import React, { Component } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image
} from "react-native";

import Input from "../../components/Input";
import usernameImg from "../../assets/images/username.png";
import passwordImg from "../../assets/images/password.png";
import eyeImg from "../../assets/images/eye_black.png";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      username:'',
      password:''

    };
   
  }

  showPass = () => {
    this.state.press === false
      ? this.setState({ showPass: false, press: true })
      : this.setState({ showPass: true, press: false });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Input
          onChange ={username=>this.setState({username})}  
          source={usernameImg}
          placeholder="Username"
          autoCapitalize={"none"}
          returnKeyType={"done"}
          autoCorrect={false}
        />
        <Input
          onChange ={password=>this.setState({password})}
          source={passwordImg}
          secureTextEntry={this.state.showPass}
          placeholder="Password"
          returnKeyType={"done"}
          autoCapitalize={"none"}
          autoCorrect={false}
          isPassword ={true}
          showPass = {this.showPass}
        />
       
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  
});
