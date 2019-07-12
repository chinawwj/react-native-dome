import React, {Component} from 'react';
import { View, StyleSheet, Text,Dimensions,ScrollView,Image,Alert,TouchableOpacity,ToastAndroid} from 'react-native';
import store from '../../store/index';
import {getUsernameAction} from '../../store/actionCreators';
import CategoryList from './CategoryList';
import Swiper from 'react-native-swiper';
import CustomIconFont from '../../icon/CustomIconFont';
// import ViewPagerAndroid from '@react-native-community/viewpager'
const { width, height } = Dimensions.get('window')

export default class Homepage extends React.Component {
  
    static navigationOptions = {
        title: '轮播图',
    };
  constructor(props) {
    super(props);
    // this.state = { text: '请输入密码' };
    this.state= store.getState();
  } 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>三凯课程</Text>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate("SubjectSelection",  {})}>
            {/* this.props.navigation.navigate('SubjectSelection',{}) */}
            <CustomIconFont style={{marginLeft:'5%',}} name={'news'} size={20} color={'#000'}/>
            </TouchableOpacity>
        </View>
       
        <View style={styles.scrollView}>
        <ScrollView style={{width:"100%"}}>
                <Swiper
                    //样式
                    style={{borderRadius:10,}}
                    //高度
                    height={width * 40 / 100}
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
                    {
                        this.state.practice.homeImg.map((item,index) => {
                            return (
                                <View key={index} style={{borderRadius:10,}} >
                                    <Image resizeMode="cover" source={item} style={styles.bannerImg} />
                                </View>
                            ); 
                          },this)
                    }
                    {/* <Image resizeMode="cover" source={require('../../img/ceshi1.jpg')} style={styles.bannerImg} />
                    <Image resizeMode="cover" source={require('../../img/ceshi2.png')} style={styles.bannerImg} />
                    <Image resizeMode="cover" source={require('../../img/ceshi3.jpg')} style={styles.bannerImg} />
                    <Image resizeMode="cover" source={require('../../img/ceshi4.jpg')} style={styles.bannerImg} /> */}
                </Swiper>
            </ScrollView>    
        </View>
        <View style={styles.Practiceoptions}>
            <CategoryList navigation={this.props.navigation} />
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
    backgroundColor:"#ffffff",
  },
  header:{
    width:"100%",
    flexDirection:"row",
    height:80,
    justifyContent:"space-between",
    alignItems: 'center'
  },
  headerTitle:{
    marginLeft:'5%',
    fontSize:26,
    fontWeight:'600',  
    color:'#000',
  },
  headerimg:{
    width:14,
    height:18,
    marginRight:16,
  },
  headertitle:{
    lineHeight:40,
  },
  scrollView:{
    width:'100%',
    height:width * 40 / 100,
  },
  Practiceoptions:{
    width:'100%',
    height:220,
    color:'#333',
    textAlign:"right",
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