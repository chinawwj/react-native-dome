import React, {Component} from 'react';
import { View, StyleSheet,Button,Text,Image,TouchableOpacity,TouchableNativeFeedback} from 'react-native';
import store from '../../store/index';
import {getUsernameAction} from '../../store/actionCreators';
import CustomIconFont from '../../icon/CustomIconFont';
import FontAwesome from "react-native-vector-icons/FontAwesome";
// import console = require('console');

const costIcon = name => ({ tintColor }) => (
    <CustomIconFont
      style={{ backgroundColor: "transparent" }}
      name={name}
      color={tintColor}
      size={22}
    />
  );
export default class AccountManagement extends React.Component {

  constructor(props) {
    super(props);
    this.state= store.getState();
    this.logOut=this.logOut.bind(this);
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
            <Text style={styles.headertitle}>账号管理</Text>
            <Text>  </Text>
        </View>
        <View style={[styles.UserInformation,styles.SetupItem]} >
            <Text style={styles.SetupItemTitle}>头像</Text>
            <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center'}}   onLongPress={() => {HeadImageSettings}}>
              <Image 
              style={styles.HeadImage} 
              source={require('../../img/notfound.png')} 
              />
               <Image 
              style={styles.rightlink} 
              source={require('../../img/rightlink.png')} 
              />
            </TouchableOpacity>
        </View>
        <View style={[styles.SetupItem,styles.Interlayer]} >
            <Text style={styles.SetupItemTitle}>昵称</Text>
            <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center'}}   onLongPress={() => {HeadImageSettings}}>
               <Image 
              style={styles.rightlink} 
              source={require('../../img/rightlink.png')} 
              />
            </TouchableOpacity>
        </View>
        <View style={styles.SetupItem} >
            <Text style={styles.SetupItemTitle}>性别</Text>
            <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center'}}   onLongPress={() => {HeadImageSettings}}>
               <Image 
              style={styles.rightlink} 
              source={require('../../img/rightlink.png')} 
              />
            </TouchableOpacity>
        </View>
        <View style={[styles.SetupItem,styles.Interlayer]} >
            <Text style={styles.SetupItemTitle}>手机号</Text>
            <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center'}}   onLongPress={() => {HeadImageSettings}}>
               <Image 
              style={styles.rightlink} 
              source={require('../../img/rightlink.png')} 
              />
            </TouchableOpacity>
        </View>
        <View style={styles.SetupItem} >
            <Text style={styles.SetupItemTitle}>修改密码</Text>
            <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center'}}   onLongPress={() => {HeadImageSettings}}>
               <Image 
              style={styles.rightlink} 
              source={require('../../img/rightlink.png')} 
              />
            </TouchableOpacity>
        </View>
        <View style={[styles.SetupItem,styles.Interlayer]} >
            <Text style={styles.SetupItemTitle}>姓名</Text>
            <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center'}}   onLongPress={() => {HeadImageSettings}}>
               <Image 
              style={styles.rightlink} 
              source={require('../../img/rightlink.png')} 
              />
            </TouchableOpacity>
        </View>
        <View style={styles.SetupItem} >
            <Text style={styles.SetupItemTitle}>上海三凯工程咨询有限公司</Text>
            <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center'}}   onLongPress={() => {HeadImageSettings}}>
               <Image 
              style={styles.rightlink} 
              source={require('../../img/rightlink.png')} 
              />
            </TouchableOpacity>
        </View>
        <View style={styles.SetupItem} >
            <Text style={styles.SetupItemTitle}>机构事务部</Text>
            <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center'}}   onLongPress={() => {HeadImageSettings}}>
               <Image 
              style={styles.rightlink} 
              source={require('../../img/rightlink.png')} 
              />
            </TouchableOpacity>
        </View>
        <TouchableNativeFeedback onPress={() =>{this.logOut()}}>
          <View style={styles.logout}>
            <Text style={{color:'#fff',lineHeight:40,}}>退出登录</Text>
          </View>
        </TouchableNativeFeedback>
        
      </View>
    )
  }
  logOut(){
    this.props.navigation.navigate('Initial',  {})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#f5f5f9",
    alignItems:'center',
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
  SetupItem:{
    width:"100%",
    height:39,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor:'#fff',
    borderBottomWidth:1,
    borderColor:'#e4e4e4',
    justifyContent:"space-between",
  },
  UserInformation:{
    borderTopWidth:1,
    borderColor:'#e4e4e4',
  },
  HeadImage:{
    width:30,
    height:30,
  },
  rightlink:{
    width:11,
    height:16,
    marginLeft:13,
    marginRight:13,
  },
  SetupItemTitle:{
    color:'#333',
    marginLeft:13,
  },
  Interlayer:{
    marginTop:16,
  },
  logout:{
    width:300,
    height:40,
    lineHeight:40,
    marginTop:140,
    alignItems:"center",
    textAlign:"center",
    borderRadius:5,
    backgroundColor:'#d43132',
  }
  
});