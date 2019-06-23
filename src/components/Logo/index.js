import React, { Component } from 'react';
import { View, Image,StyleSheet,Text } from 'react-native';

import logoImg from '../../assets/images/logo.png';
export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={logoImg} />                
                <Text style={styles.text}>Mobile   Developer</Text>              
            </View>
    
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:3,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        width:180,
        height:60,
    },
    text:{
        textTransform:'uppercase',
        color:'#fff',
        fontSize:20,
        color:'#1988C8',
        fontWeight:'500',
        marginBottom:10
        
    },

})