import React, {Component} from 'react';
import { View, StyleSheet, Text,Image,TouchableOpacity} from 'react-native';
import store from '../../store/index';
import {getUsernameAction} from '../../store/actionCreators';


export default class Examination extends React.Component {
  
    static navigationOptions = {
        title: '考试',
    };

  constructor(props) {
    super(props);
    this.state= store.getState();
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
            <Text style={styles.headertitle}>考试</Text>
            <Text>  </Text>
        </View>
        <View style={styles.announcement}>
            <View><Text>公告：</Text></View>
            <View>
                <View><Text style={styles.noticeitem}>      考试通知</Text></View>
                <View><Text>      机构事业部暂定于2019年7月8日举行公司内部考核，望各位同事做好准备，积极备战！</Text></View>
            </View>
            <View>
                <View><Text style={styles.noticeitem}>      培训通知</Text></View>
                <View><Text>      机构事业部暂定于2019年6月28日举行公司内部集训，望各位同事准时参加，不准迟到，有事请假！</Text></View>
            </View>
        </View>
        <View style={styles.Practiceoptions}>
         <TouchableOpacity
            color="#fff"
            onPress={() => this.props.navigation.navigate('PaperInformation',  {})}
            >
            <Text style={styles.Practiceitem}>模拟考试</Text>
            </TouchableOpacity>
          <TouchableOpacity
            color="#fff"
            onPress={() => this.props.navigation.navigate('PaperInformation',  {})}
            >
            <Text style={styles.Practiceitem}>考试</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
  inputUsernameChange(text){
    const action= getUsernameAction(text)
    store.dispatch(action);
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
  announcement:{
    backgroundColor:"#99ccff",
    paddingBottom:40,
    marginBottom:40,
  },
  noticeitem:{
    color:"#ffff00"
  },
  Practiceoptions:{
    width:120,
    color:'#333',
    textAlign:"right",
    marginBottom:160,
  },
  Practiceitem:{
    height:36,
    lineHeight:36,
    color:'#333',
    marginTop:10,
    borderWidth:1,
    textAlign:"center",
  }
});