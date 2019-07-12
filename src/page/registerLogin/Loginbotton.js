import React, {Component} from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default class Loginbotton extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Text 
      onPress={() => navigate('Login',  {})}
       style={[styles.signin,styles.homeoptionsitems]}
       >登录</Text>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    backgroundColor: '#006600',
    justifyContent: 'flex-end'
  },
  homeoptionsitems:{
    width:210,
    height:40,
    textAlign:'center',
    lineHeight:40,
    borderWidth:1,
    borderColor:'#333',
    borderRadius:5,
  },
  signin:{
    color:'#fff',
    backgroundColor:'#0066CC',
    marginBottom: 20,
  },
});