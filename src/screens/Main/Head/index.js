import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import SettingIcon from "react-native-vector-icons/Feather";
import HandIcons from "react-native-vector-icons/FontAwesome5";

import MyPrayer from "../MyPrayers";
import Subscribed from "../Subscribed";
import { colors } from "../../../utils";

export default class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRenderSubscribed: false
    };
  }
  _onRenderAvatar() {
    return (
      <View style={styles.wrapperAvatar}>
        <View style={styles.dumbAvatar}>
          <View style={styles.settingIcon}>
            <SettingIcon
              name="settings"
              color={colors.whitePrimary}
              size={25}
            />
          </View>
        </View>
      </View>
    );
  }
  _onRenderStreakCount() {
    return (
      <View style={styles.streakWrapper}>
        <Text style={styles.prayCount}>Streak</Text>
        <Text style={styles.prayNum}>365</Text>
      </View>
    );
  }
  _onRenderWeekCount() {
    return (
      <View style={styles.weekWrapper}>
        <Text style={styles.prayCount}>Week</Text>
        <Text style={styles.prayNum}>525</Text>
      </View>
    );
  }
  _onRenderPrayActivities(){
      return(
        <View style={styles.prayActivityWrapper}>
          <TouchableOpacity style={styles.dumbActivity}>
            <HandIcons
              name="praying-hands"
              color={colors.whitePrimary}
              size={18}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.dumbActivity}>
            <HandIcons name="khanda" color={colors.whitePrimary} size={18} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.dumbActivity}>
            <HandIcons
              name="hands-helping"
              color={colors.whitePrimary}
              size={18}
            />
          </TouchableOpacity>
        </View>
      )
  }
  _onRenderHeader() {
    return (
      <View style={styles.headerWrapper}>
        {/* Avatar */}
        {this._onRenderAvatar()}
        {/* Streak Count */}
        {this._onRenderStreakCount()}
        {/* Week Count */}
        {this._onRenderWeekCount()}
        {/* Line | */}
        <View
          style={{
            borderRightColor: colors.grayPrimary,
            borderRightWidth: 1,
            height: 30,
            position: "relative",
            top: 10
          }}
        />
        {/* Pray activities */}
        {this._onRenderPrayActivities()}
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {/* Header */}
        {this._onRenderHeader()}
        {/* Tab */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whitePrimary,
    paddingTop: 20
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginLeft: 10
  },
  wrapperAvatar: {},
  dumbAvatar: {
    backgroundColor: colors.darkBluePrimary,
    width: 70,
    height: 70,
    borderRadius: 35
  },
  prayActivityWrapper: {
    display: "flex",
    flexDirection: "row"
  },
  dumbActivity: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.bluePrimary,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  settingIcon: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: colors.bluePrimary,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  prayNum: {
    color: colors.goldenPrimary,
    fontSize: 20,
    fontWeight: "500"
  },
  prayCount: {
    textTransform: "uppercase",
    fontSize: 13,
    letterSpacing: 0.5,
    marginTop: 10
  },
  weekWrapper: {},
  streakWrapper: {}
});
