import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Input from "../../components/Input";
import usernameImg from "../../assets/images/username.png";
import passwordImg from "../../assets/images/password.png";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false
     
    };
  }

  showPass = () => {
    this.state.press === false
      ? this.setState({ showPass: false, press: true })
      : this.setState({ showPass: true, press: false });
  };

  render() {
    return (
      <KeyboardAwareScrollView
        innerRef={ref => {
          this.scroll = ref;
        }}
      >
        <View style={styles.container}>
          <Input
            onChange={this.props.onChangeUser}
            source={usernameImg}
            placeholder="Username"
            autoCapitalize={"none"}
            returnKeyType={"done"}
            autoCorrect={false}
          />
          <Input
            onChange={this.props.onChangePass}
            source={passwordImg}
            secureTextEntry={this.state.showPass}
            placeholder="Password"
            returnKeyType={"done"}
            autoCapitalize={"none"}
            autoCorrect={false}
            isPassword={true}
            showPass={this.showPass}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});
