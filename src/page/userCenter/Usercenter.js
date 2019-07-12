import React, {Component} from 'react';
import { View, StyleSheet, Text,Image,TouchableHighlight,Alert} from 'react-native';
import store from '../../store/index';
import {getUsernameAction} from '../../store/actionCreators';
import CustomIconFont from '../../icon/CustomIconFont';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const costIcon = name => ({ tintColor }) => (
    <CustomIconFont
      style={{ backgroundColor: "transparent" }}
      name={name}
      color={tintColor}
      size={22}
    />
  );
export default class Usercenter extends React.Component {
  constructor(props) {
    super(props);
    this.state= store.getState();
    this.personalSettings=this.personalSettings.bind(this);
  }

  render() {
    console.log(this.state.login.userData)
    return (
      <View style={styles.container}>
        <TouchableHighlight onLongPress={this.personalSettings} underlayColor="white">
          <View style={styles.UserInformation}>
              <Image style={styles.UserAvatar} source={require('../../img/notfound.png')} />
              <Text style={styles.UserName}>昵称</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.operationList}>
            <View style={styles.operationItem} onPress={()=>{this.personalSettings()}}>
                <CustomIconFont name={'shoucang'} size={20} color={'#333'}/>
                <Text style={styles.operationItemTxt}>收藏</Text>
            </View>
            <View style={styles.operationItem}>
                <CustomIconFont name={'liebiao'} size={20} color={'#333'}/>
                <Text style={styles.operationItemTxt}>历史</Text>
            </View>
            <View style={styles.operationItem}>
                <CustomIconFont name={'cuotiben'} size={20} color={'#333'}/>
                <Text style={styles.operationItemTxt}>错题</Text>
            </View>
        </View>
        <View style={styles.showItem}>
            <View style={[styles.showItemUpper,styles.showItemOption]}><Text>模考排名：</Text><Text>23</Text></View>
            <View style={styles.showItemOption}><Text>考试排名：</Text><Text>1</Text></View>
        </View>
        <View style={styles.showItem}>
            <View style={[styles.showItemUpper,styles.showItemOption]}><Text>建议与反馈</Text></View>
            <View style={styles.showItemOption}><Text>软件版本</Text></View>
        </View>
      </View>
    )
  }
  personalSettings(){
    this.props.navigation.navigate('AccountManagement',  {})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#f5f5f9",
  },
  UserInformation:{
    width:"100%",
    height:80,
    backgroundColor:"#0066cc",
    flexDirection: 'row',
    alignItems:'center',
  },
  UserAvatar:{
    width:60,
    height:60,
    borderRadius:40,
    marginLeft:17,
    marginRight:10,
  },
  UserName:{
    color:'#fff',
  },
  operationList:{
    height:60,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'#fff',
    marginBottom:14,
  },
  operationItem:{
    alignItems:"center",
    textAlign:"center",
  },
  operationItemTxt:{
    marginTop:5,
    color:'#333',
  },
  showItem:{
    marginTop:50,
  },
  showItemOption:{
    height:32,
    fontSize:12,
    flexDirection: 'row',
    backgroundColor:'#fff',
    alignItems:"center",
    paddingLeft:4,
    color:'#333',
  },
  showItemUpper:{
    marginBottom:4,
  },
});