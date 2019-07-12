/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Alert, Image} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Touchables  from '../Touchables';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    '轻松答题，快乐备战',
});


class Initial extends Component {

  render() {
    // const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.homeheader}>
          <Image style={styles.answerlogo} source={require('../../img/notfound.png')} />
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
        <View style={styles.homeoptions}>
          <Text 
          //  onPress={()=>navigate('Touchables',{name:'first'})}
           onPress={this._onPressButton}
           style={[styles.signin,styles.homeoptionsitems]}
           >登录</Text>
          <Text style={[styles.register,styles.homeoptionsitems]}>注册</Text>
        </View>
        <Button 
          onPress={() => this.props.navigation.navigate('Touchables')}
           title="go to Touchables"
          >跳转</Button>
        <Text style={styles.company}>©2019 上海司睿杰建筑科技有限公司</Text>
      </View>
    );
  }
  _onPressButton() {
    Alert.alert('APP正在加载中。。。请稍候')
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

class DetailsScreen extends React.Component {
  render() {
    return (
      <Touchables/>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: Initial,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  });
const AppContainer = createAppContainer(RootStack);

export default createAppContainer(AppContainer);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
