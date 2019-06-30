import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Input, Modal, Wrapper, ButtonBase } from "../../../components";
import { colors } from "../../../utils";
import firebase from "react-native-firebase";

const auth = firebase.auth();

import usernameImg from "../../../assets/images/username.png";
import passwordImg from "../../../assets/images/password.png";
const WIDTH = Dimensions.get("window").width;
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      isRegistering: false,
      registerError: null,
      showPass: true,
      press: false,
      sendConfirmMail: false
    };
  }
  _onRegisterUser = async () => {
    const { username, password } = this.state;
    if (username !== null && password !== null) {
      try {
        this.setState({ isRegistering: true });
        await auth.createUserWithEmailAndPassword(username, password);
        await auth.currentUser.sendEmailVerification(); // gui email cho user confirm
        this.setState({ isRegistering: false, sendConfirmMail: true });
        this.props.navigation.navigate("Login")
        
      } catch (error) {
        this.setState({ isRegistering: false });
        console.log("=============================================");
        console.log("Register user error" + error);
        console.log("=============================================");
        this.setState({
          registerError: error
        });
        alert(error.code);
      }
    }
  };
  _onRenderModalMessage = () => {
    const { registerError, sendConfirmMail } = this.state;
    if (registerError !== null && registerError.code === "auth/invalid-email") {
      return "Email should follow format example@example.com. Please try again";
    }
    //................................
  };
  showPass = () => {
    this.state.press === false
      ? this.setState({ showPass: false, press: true })
      : this.setState({ showPass: true, press: false });
  };
  _onRenderTextFiled = () => {
    return (
      <KeyboardAwareScrollView
        innerRef={ref => {
          this.scroll = ref;
        }}
      >
        <View style={styles.container}>
          <Input
            onChange={username => this.setState({ username })}
            source={usernameImg}
            placeholder="Username"
            autoCapitalize={"none"}
            returnKeyType={"done"}
            autoCorrect={false}
          />
          <Input
            onChange={password => this.setState({ password })}
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
  };
  render() {
    const { isRegistering } = this.state;
    return (
      <Wrapper isLoading={isRegistering} customStyle={styles.wrapper}>
        <View style={styles.top}>
          <Text style={styles.text}>Become a Buddhist</Text>
          <Icons name={"buddhism"} size={100} color={colors.whitePrimary} />
        </View>
        {this._onRenderTextFiled()}
        <View style={styles.floor}>
          <ButtonBase
            children="Register"
            btnStyle={{ width: WIDTH - WIDTH * 0.2 }}
            onPress={this._onRegisterUser}
          />
        </View>
      </Wrapper>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.darkBluePrimary,
    alignItems: "center"
  },
  text: {
    textTransform: "uppercase",
    fontSize: 35,
    color: colors.whitePrimary,
    fontWeight: "500",
    marginBottom: 10
  },
  container: {
    flex: 1,
    alignItems: "center"
  },
  top: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  floor: {
    flex: 2
  }
});
