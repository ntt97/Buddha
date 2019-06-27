import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image,
  View,
  Dimensions
} from "react-native";
import spinner from "../../assets/images/loading.gif";
const DEVICE_WIDTH = Dimensions.get("window").width;
const MARGIN = 40;

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
  }
  _onPress = () => {
    this.setState({ isLoading: true });
    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear
    }).start();
    setTimeout(() => {
      this._onGrow();
    }, 2000);
    setTimeout(() => {
      this.setState({ isLoading: false });
      this.buttonAnimated.setValue(0);
      this.growAnimated.setValue(0);
      this.props.onPress();
    }, 2300);
  };
  _onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear
    }).start();
    

  }

  render() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN]
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN]
    });
    const {btnStyle} = this.props
    return (
      <View style={styles.container}>
        <Animated.View style={{ width: changeWidth }}>
          <Animated.View
            style={[styles.circle, { transform: [{ scale: changeScale }] }]}
          />
          <TouchableOpacity           
            style={[styles.button,btnStyle]}
            onPress={this._onPress}
            activeOpacity={1}
          >
            {this.state.isLoading ? (
              <Image source={spinner} style={styles.image} />
            ) : (
              <Text style={styles.text}>{this.props.children}</Text>
            )}
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f035E0",
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100
  },
  image: {
    width: 24,
    height: 24
  },
  text: {
    color: "white",
    backgroundColor: "transparent" // No color
  },
  circle: {
    top: 40,
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: "#F035E0",
    borderRadius: 100,
    alignSelf: "center",
    zIndex: 99,
    backgroundColor: "#F035E0"
  }
});
