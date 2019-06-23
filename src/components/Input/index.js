import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TextInput, Image,Dimensions,TouchableOpacity} from 'react-native';
import eyeImg from "../../assets/images/eye_black.png";
export default class Input extends Component {
 

    _onChange = (e) =>{
        this.props.onChange(e)
    }
  render() {
      const {source,placeholder,secureTextEntry,autoCorrect,autoCapitalize,returnKeyType,isPassword}= this.props
    return (
      <View style={styles.inputWrapper}>
        <Image source={source} style={styles.inlineImg} />
        <TextInput
          onChange = {e=>this._onChange(e)}  
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          autoCorrect={autoCorrect}
          autoCapitalize={autoCapitalize}
          returnKeyType={returnKeyType}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
        />
        {isPassword?(<TouchableOpacity
          activeOpacity={0.7}
          style={styles.eye}
          onPress={this.props.showPass}
        >
          <Image source={eyeImg} style={styles.iconEye} />
        </TouchableOpacity>):(<View></View>)}
         
      </View>
    );
  }
}

Input.propTypes = {
  source: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  isPassword:PropTypes.bool,
  autoCapitalize: PropTypes.string,
  returnKeyType: PropTypes.string,
};

const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#ffffff',
  },
  inputWrapper: {
    flex: 1,
    marginBottom:5
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
  eye:{
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    right: 35,
    top: 9,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: "rgba(0,0,0,0.2)"
  }
});