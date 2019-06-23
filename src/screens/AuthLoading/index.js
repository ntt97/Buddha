import React, { Component } from 'react';
import { View,Text } from 'react-native';
import AsyncStorage  from '@react-native-community/async-storage'
import {storageKey} from '../../utils'
export default class AuthLoading extends Component{
    componentDidMount = async() =>{
        const {navigation} = this.props
        // get token from localStorage
        const token = await AsyncStorage.getItem(storageKey.token)
        //check token in storage
        if(token && token !==null){
            //if exits --> Main
            navigation.navigate('Main')
        }else{
            //if no exits --> Auth
            navigation.navigate('Auth')
        }
    }
    render(){
        return(
            <View style= {{flex:1}}>
                <Text>AuthLoading...</Text>
            </View>
        )
    }
}