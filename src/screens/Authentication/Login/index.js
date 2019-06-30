import React, { Component } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import bg from "../../../assets/images/wallpaper.png";

import { Logo, FormLogin, Button, SignupSection, Modal } from "../../../components";
import firebase from "react-native-firebase";
import { storageKey } from "../../../utils";
import AsyncStorage from "@react-native-community/async-storage";

const auth = firebase.auth();
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginError: null,
      isShowModal: false
    };
  }
  // onPress Login
  _onPress = async () => {
    const { username, password } = this.state;
    try {
      const user = await auth.signInWithEmailAndPassword(username, password);

      if (user) {
        const token = await auth.currentUser.getIdToken();

        if (token) {
          await AsyncStorage.setItem(storageKey.token, JSON.stringify(token));
          await AsyncStorage.setItem(storageKey.userInfo, JSON.stringify(user));
          this.props.navigation.navigate("Main");
        }
      }
    } catch (error) {
      this.setState({ loginError: error });
      this._onRenderErrMess()
      this.setState({isShowModal:true})
      console.log("=============================================");
      console.log(error);
      console.log("=============================================");
    }
  };

  _onRenderErrMess = () => {
      const {loginError} = this.state
      if(loginError !== null){
          if(loginError.code ==='auth/invalid-email'){
              return 'Email should follow forma example@example.com. Please try again'
          }else if(loginError.code == 'auth/user-not-found'){
              return `Oop! User doesn't exist! Poor you!`
          }else if(loginError.code ==='auth/wrong-password'){
              return 'Oop! Password you entered is not correct. Please try again'
          }
      }
  };
  _onRenderModal = () =>{
    const {isShowModal} = this.state
    if(isShowModal){
        return(
            <Modal 
                isVisible = {isShowModal}
                message ={this._onRenderErrMess()}
                onPress = {()=>this.setState({isShowModal :!this.state.isShowModal})}
            />
            
        )
    }
   
  }
  render() {
    return (
      <ImageBackground source={bg} style={styles.wrapper}>
        <Logo />
        <FormLogin
          onChangeUser={username => this.setState({ username })}
          onChangePass={password => this.setState({ password })}
        />
        <Button children="Login" onPress={this._onPress} />
        <SignupSection navigation={this.props.navigation} />
        {this._onRenderModal()}
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});
