import React, { Component } from 'react';
import { 
    ImageBackground,   
    StyleSheet,
 } from 'react-native';
 import bg from '../../../assets/images/wallpaper.png'
 
import {Logo, FormLogin, Button, SignupSection} from '../../../components'

 export default class Login extends Component{
     
     render(){
         return(
            <ImageBackground source ={bg} style ={styles.wrapper}>
                <Logo />
                <FormLogin />
                <Button />
                <SignupSection />
               
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