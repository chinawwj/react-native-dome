import React, {Component} from 'react';
import { View, StyleSheet, Text,Dimensions,ScrollView,Image,Alert,TouchableOpacity,ToastAndroid} from 'react-native';
import store from '../../store/index';
import {getUsernameAction} from '../../store/actionCreators';

import Swiper from 'react-native-swiper';
const { width, height } = Dimensions.get('window')

export default class Login extends React.Component {
  
    static navigationOptions = {
        title: '轮播图',
    };
  constructor(props) {
    super(props);
    // this.state = { text: '请输入密码' };
    this.state= store.getState();
  }
  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate("SubjectSelection",  {})}>
            {/* this.props.navigation.navigate('SubjectSelection',{}) */}
              <Image 
              style={styles.headerimg} 
              source={require('../../img/addsub.png')} 
            />
            </TouchableOpacity>
        </View>
        <ScrollView style={{width:"100%"}}>
                <Swiper
                    //样式
                    style={styles.wrapper}
                    //高度
                    height={width * 40 / 75}
                    // 是否显示控制按钮（即左右两侧的箭头是否可见）
                    showsButtons={false}
                    //这个很主要啊，解决白屏问题
                    removeClippedSubviews={false}
                    // 切换时间，单位秒
                    autoplayTimeout={3} 
                    // 是否自动轮播
                    autoplay={true}
                    // 如果为true，滚动方向是横向的，如果为false，滚动方向是竖向的
                    horizontal={true}
                    // 分页风格
                    paginationStyle={styles.paginationStyle}
                    // 点样式
                    dotStyle={styles.dotStyle}
                    // 活动点样式
                    activeDotStyle={styles.activeDotStyle}
                >
                    <Image resizeMode="cover" source={require('../../img/ceshi1.jpg')} style={styles.bannerImg} />
                    <Image resizeMode="cover" source={require('../../img/ceshi2.png')} style={styles.bannerImg} />
                    <Image resizeMode="cover" source={require('../../img/ceshi3.jpg')} style={styles.bannerImg} />
                    <Image resizeMode="cover" source={require('../../img/ceshi4.jpg')} style={styles.bannerImg} />
                </Swiper>
            </ScrollView>
        <View style={styles.Practiceoptions}>
          <TouchableOpacity
            color="#fff"
            >
            <Text style={styles.Practiceitem}>单选</Text>
            </TouchableOpacity>
        <TouchableOpacity
            color="#fff"
            >
            <Text style={styles.Practiceitem}>多选</Text>
            </TouchableOpacity>
          <TouchableOpacity
            color="#fff"
            >
            <Text style={styles.Practiceitem}>判断</Text>
            </TouchableOpacity>
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
    justifyContent:"flex-end",
    alignItems: 'center'
  },
  headerimg:{
    width:14,
    height:18,
    marginRight:16,
  },
  headertitle:{
    lineHeight:40,
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
  },
  wrpaper: {
    width: "100%",
    height: width * 40 / 75,
},
paginationStyle: {
    bottom: 6,
},
dotStyle: {
    backgroundColor: '#fff',
    opacity: 0.4,
},
activeDotStyle: {
    backgroundColor: '#0066cc',
},
bannerImg: {
    marginLeft:'5%',
    width: "90%",
    height: width * 40 / 75,
}
});