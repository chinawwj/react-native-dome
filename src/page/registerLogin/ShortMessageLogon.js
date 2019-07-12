import React, {Component} from 'react';
import { View, StyleSheet, Text, Button,Image,TextInput,Alert,TouchableOpacity,ToastAndroid} from 'react-native';
import store from '../../store/index'
import {getUsernameAction,getPasswordAction} from '../../store/actionCreators'

export default class Login extends React.Component {
  
  constructor(props) {
    super(props);
    // this.state = { text: '请输入密码' };
    this.state= store.getState();
    this.inputUsernameChange=this.inputUsernameChange.bind(this);
  }

  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
          <Image 
          style={styles.headerimg} 
          source={require('../../img/return.png')} 
          />
        </TouchableOpacity>
          <Text style={styles.headertitle}>短信登录</Text>
          <Text>  </Text>
        </View>
        <View style={styles.filllist}>
            <View style={styles.fillItem}>
                <Text style={styles.fillItemname}>账号</Text>
                <TextInput 
                style={styles.fillItemInput}
                // value={this.state.username}
                placeholder="请输入账号" 
                // onChangeText = {this.inputUsernameChange}
                ></TextInput>
            </View>
            <View style={styles.fillItem}>
                <Text style={styles.fillItemname}>验证码</Text>
                <TextInput 
                style={styles.fillItemInput}
                // value={this.state.password}
                placeholder="请输入验证码" 
                // onChangeText = {this.inputPasswordChange}
                ></TextInput>
                <Button
                    color="#0066CC"
                    title={'验证码'} 
                />
            </View>
        </View>
        <View style={[styles.signin,styles.homeoptionsitems]}>
          <Button
            color="#0066CC"
            title={'登录'} 
            onPress={()=>{this.loginMethod(this.state)}}
          />
        </View>
      </View>
    )
  }
  inputUsernameChange(text){
    const action= getUsernameAction(text)
    store.dispatch(action);
  }
  loginMethod=(state)=>{
    Alert.alert(
        '登录提示',
        '请确认账号和验证码',
        [
            { text: '取消', onPress: () => {} },
            { text: '确定', onPress:  () => 
                // ToastAndroid.show("用户名："+ state.userName + "\t 密码：" + state.passWord,ToastAndroid.SHORT) 
                ToastAndroid.show(`用户名：${state.userName}\t 密码：${state.passWord}`,ToastAndroid.SHORT) 
            }
        ],
        { cancelable: true });
};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#f5f5f9",
  },
  header:{
    width:"100%",
    flexDirection:"row",
    height:40,
    backgroundColor:"#fff",
    justifyContent:"space-between",
    alignItems: 'center'
  },
  headerimg:{
    width:14,
    height:18,
  },
  headertitle:{
    lineHeight:40,
  },
  filllist:{
    width:300,
    backgroundColor:"#fff",
    marginTop:40,
    marginBottom: 50,
  },
  fillItem:{
    flexDirection:"row",
    height:40,
    alignItems: 'center',
  },
  fillItemname:{
    paddingRight:5,
    paddingLeft:8,
    fontSize:16,
    color:'#333333',
  },
  fillItemInput:{
    width:170,
    height:40,
    color:'#999999',
  },
  homeoptionsitems:{
    width:300,
    height:40,
    textAlign:'center',
    lineHeight:40,
    borderRadius:5,
  },
  signin:{
    color:'#fff',
    backgroundColor:'#0066CC',
  },
  ShortMessageLogon:{
    width:300,
    textAlign:"right",
  },
});