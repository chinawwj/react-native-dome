import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Alert, Image} from 'react-native';
import Loginbotton from './Loginbotton'

const instructions = Platform.select({
  ios: '轻松答题，快乐备战',
  android:
    '轻松答题，快乐备战',
});


export default class Initial extends React.Component {
  render() {
    // const {navigate} = this.props.navigation;
    console.log(this.props)
    return (
      <View style={styles.container}>
        <View style={styles.homeheader}>
          <Image style={styles.answerlogo} source={require('../../img/notfound.png')} />
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
        <View style={styles.homeoptions}>
          <Loginbotton navigation={this.props.navigation}/>
          <Text style={[styles.register,styles.homeoptionsitems]}>注册</Text>
        </View>
        <Text style={styles.company}>©2019 上海司睿杰建筑科技有限公司</Text>
      </View>
    );
  }
  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({

        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f9',
  },
  homeheader:{
    flexDirection:'column',
    alignItems: 'center',
  },
  homeoptions:{
    flexDirection:'column',
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
  register:{
    color:'#333',
    backgroundColor:"#fff",
  },
  answerlogo:{
    marginTop: 90,
    width: 90, 
    height: 90,
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#0066CC',
    marginTop: 10,
  },
  company:{
    fontSize:14,
    bottom:40,
    color:"#0066CC",
  }
});