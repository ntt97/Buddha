import React, { Component } from 'react';
import { 
    ImageBackground,   
    StyleSheet,
 } from 'react-native';
 import bg from '../../../assets/images/wallpaper.png'
 
import {Logo, FormLogin, Button, SignupSection} from '../../../components'


 export default class Login extends Component{
     _onPress =()=>{
         this.props.navigation.navigate("Main")
         console.log("Hellow")
     }
     render(){
         return(
            <ImageBackground source ={bg} style ={styles.wrapper}>
                <Logo />
                <FormLogin />  
                <Button children="Login" onPress = {this._onPress} />
                <SignupSection navigation= {this.props.navigation}/>
               
            </ImageBackground>
         )
     }
 }
 const styles = StyleSheet.create({
     wrapper:{
         flex:1,
     }
 }
 )