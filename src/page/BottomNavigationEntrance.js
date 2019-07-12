import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CustomIconFont from '../icon/CustomIconFont';
import Homepage from './simulation/Homepage';
import Practice from './simulation/Practice';
import Examination from './examination/Examination';
import Usercenter from './userCenter/Usercenter';

const tabBarIcon = name => ({ tintColor }) => (
  <FontAwesome
    style={{ backgroundColor: "transparent" }}
    name={name}
    color={tintColor}
    size={22}
  />
);
const costIcon = name => ({ tintColor }) => (
  <CustomIconFont
    style={{ backgroundColor: "transparent" }}
    name={name}
    color={tintColor}
    size={22}
  />
);
class HomepageScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: costIcon("qianbi"),
    tabBarLabel:"练习"
  };
  render() {
    return (
      <Homepage navigation={this.props.navigation}/>
    );
  }
}
class ExaminationScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: costIcon("kaoshi"),
    tabBarLabel:"考试"
  };
  render() {
    return (
      <Examination navigation={this.props.navigation}/>
    );
  }
}
class MyScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: costIcon("wode"),
    tabBarLabel:"我的"
  };
  render() {
    return (
      <Usercenter navigation={this.props.navigation}/>
    );
  }
}
export default createAppContainer(
  createMaterialBottomTabNavigator({
    Homepage: {screen: HomepageScreen},
    Examination: { screen: ExaminationScreen },
    My: { screen: MyScreen },   
  }, {
    activeColor: '#f0edf6',
    inactiveColor: '#d2cfd6',
    barStyle: { backgroundColor: '#0066cc' },
  })
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
