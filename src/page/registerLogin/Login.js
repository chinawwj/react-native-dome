import React, {Component} from 'react';
import { View, StyleSheet, Text, Button,Image,TextInput,Alert,TouchableOpacity,ToastAndroid} from 'react-native';
import store from '../../store/index'
import {getUsernameAction,getPasswordAction,accountVerification,setUserAction} from '../../store/actionCreators'

export default class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
			username: null,
			password: null,
		}
    // this.state= store.getState();
    this.inputPasswordChange=this.inputPasswordChange.bind(this);
    this.inputUsernameChange=this.inputUsernameChange.bind(this);
    this.loginMethod=this.loginMethod.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
          <Image 
          style={styles.headerimg} 
          source={require('../../img/return.png')} 
          />
        </TouchableOpacity>
          <Text style={styles.headertitle}>登录</Text>
          <Text>  </Text>
        </View>
        <View style={styles.filllist}>
            <View style={styles.fillItem}>
                <Text style={styles.fillItemname}>账号</Text>
                <TextInput 
                style={styles.fillItemInput}
                value={this.state.username}
                placeholder="请输入账号" 
                // onChangeText={(username)=>{this.inputUsernameChange(username)}}
                onChangeText={(username) => this.setState({ username })}
                ></TextInput>
            </View>
            <View style={styles.fillItem}>
                <Text style={styles.fillItemname}>密码</Text>
                <TextInput 
                style={styles.fillItemInput}
                value={this.state.password}
                secureTextEntry={true}
                placeholder="请输入密码" 
                // onChangeText={(password)=>{this.inputPasswordChange(password)}}
                onChangeText={(password) => this.setState({ password })}
                ></TextInput>
            </View>
        </View>
        <View style={[styles.signin,styles.homeoptionsitems]}>
          <Button
            color="#0066CC"
            title={'登录'} 
            onPress={()=>{this.validatelogon()}}
          />
        </View>
        <View style={styles.ShortMessageLogon} >
          <Text 
            style={{textAlign:"right",color:"#0066cc"}}
            onPress={() => this.props.navigation.navigate('ShortMessageLogon',  {})}
          >短信验证码登录</Text>
        </View>
      </View>
    )
  }
  inputUsernameChange(username){
    const action= getUsernameAction(username)
    store.dispatch(action);
  }
  inputPasswordChange(password){
    // console.log(password)
    const action= getPasswordAction(password)
    store.dispatch(action);
  }
  loginMethod=(state)=>{
    // console.log(state)
    const action= accountVerification(state)
    store.dispatch(action);
    Alert.alert(
        '登录提示',
        '请确认账号和密码',
        [
            { text: '取消', onPress: () => {console.log(store.getState())} },
            { text: '确定', onPress:  () => this.validatelogon()}
        ],
        { cancelable: true });
};
validatelogon=()=>{
      fetch('http://139.224.235.217:8003/quiz/pwdlogin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        telephone_or_user_name: this.state.username,
        password: this.state.password,
      }),
    }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      if (responseJson.error==null) {
        this.setState({ 
          username: null,
          password: null,
         });
        this.props.navigation.navigate('BottomNavigationEntrance',  {})
        const userData =responseJson.msg
        const action =setUserAction(userData)
        store.dispatch(action);
      } else{
        Alert.alert('请输入正确账号登录！'); 
      }
    })
   }
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
    width:200,
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