import React, {Component} from 'react';
import { View, StyleSheet,Text,Dimensions,ProgressBarAndroid,FlatList,Alert,TouchableOpacity,ToastAndroid,ImageBackground} from 'react-native';
import store from '../../store/index';
import {getUsernameAction} from '../../store/actionCreators';
import CustomIconFont from '../../icon/CustomIconFont';

import Swiper from 'react-native-swiper';
const { width, height } = Dimensions.get('window')

export default class Login extends React.Component {
  
  constructor(props) {
    super(props);
    // this.state= store.getState();
    this.state={
        questionType:[{type:'判断题',Total:'100',complete:'0'},{type:'单选题',Total:'100',complete:'50'},{type:'多选题',Total:'100',complete:'100'}] 
    }
  }
  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../img/ceshi5.jpg')} style={{width: '100%', height:200}}>
        <View style={styles.header}>
            <View style={[styles.level,styles.headerContent]}>
                <CustomIconFont style={styles.rightSpace} name={'toLeft'} size={20} color={'#fff'}/> 
                <Text style={styles.topicClassification}>监理考点学习</Text>
                <Text></Text>
            </View>
            <View><Text style={styles.Tips}>该考点为监理必考点，请认真学习。</Text></View>  
        </View>
        </ImageBackground>
        <View style={styles.selectionTypes}>
            <FlatList
            horizontal={false}
            numColumns={1}
            keyExtractor={(item, index) => `item-${index}`}
            data={this.state.questionType}
            renderItem={({item,index}) => 
            <View style={[styles.level,styles.questionItem]}>
                <View>
                    <Text>{item.type}</Text>
                    <View style={[styles.level]}>
                        <ProgressBarAndroid styleAttr="Horizontal" color="#ffd200" style={{width:150,marginRight:16,}} />
                        <View style={styles.level}><Text>已学</Text><Text>{item.complete}</Text><Text>/</Text><Text>{item.Total}</Text></View>
                    </View>
                </View>
                <View>
                    <TouchableOpacity 
                    style={styles.startBtn}
                    onPress={() => this.props.navigation.navigate('TrainingBegins', {name:item.type})}
                    >
                        <Text style={{color:'#fff',textAlign:"center",}}>去学习</Text>    
                    </TouchableOpacity>  
                </View>
            </View>
            }
            />
        </View>
        <View style={[styles.level,styles.comprehensiveExercises]}>
                <View>
                    <Text>综合联系</Text>
                    <Text>习题自测 巩固知识点</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.reviewBtn}>
                        <Text style={{color:'#4990f8',textAlign:"center",}}>去复习</Text>    
                    </TouchableOpacity>  
                </View>
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
    height:200,
    // backgroundColor:"#fff",
    alignItems: 'center'
  },
  headerContent:{
    width:"100%", 
    justifyContent:"space-between",  
    marginBottom:50,
    marginTop:25,
  },
  headerimg:{
    width:14,
    height:18,
    marginRight:16,
  },
  headertitle:{
    lineHeight:40,
  },
  level:{
    flexDirection:"row",
    alignItems: 'center',
  },
  topicClassification:{
    color:'#fff',
    textAlign:"center",
  },
  Tips:{
    color:'#fff',
  },
selectionTypes: {
   width:'90%',
   position:'relative',
   top: -16,
},
questionItem: {
    width: "100%",
    height: 90,
    backgroundColor: '#fff',
    borderRadius:5,
    marginBottom:15,
    justifyContent:"space-between",  
    paddingLeft:20,
    paddingRight:20,
},
comprehensiveExercises:{
    width: "90%",
    height: 90,
    backgroundColor: '#fff',
    borderRadius:5,
    justifyContent:"space-between",  
    paddingLeft:20,
    paddingRight:20,
    position:'relative',
    top: -16,
},
activeDotStyle: {
    backgroundColor: '#0066cc',
},
startBtn: {
    // marginLeft:'5%',
    width: 70,
    height: 32,
    borderRadius:12,
    justifyContent:"center",
    backgroundColor: '#4990f8',
},
reviewBtn: {
    // marginLeft:'5%',
    width: 70,
    height: 32,
    borderRadius:12,
    justifyContent:"center",
    backgroundColor: '#fff',
    borderWidth:1,
    borderColor: '#4990f8',
}
});