import React, {Component} from 'react';
import { View, StyleSheet,Dimensions,Text, Image,TouchableOpacity ,ScrollView} from 'react-native';
// const imageData = require('../../../testinterface.json');
const { width, height } = Dimensions.get('window')

export default class PaperInformation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedSubjects:[],
            practiceSubject:[{
                "id": "1",
                "title": "安全"
            },
            {
                "id": "2",
                "title": "造价"
            },
            {
                "id": "3",
                "title": "工程"
            },
            {
                "id": "4",
                "title": "监理"
            },
            {
                "id": "5",
                "title": "建造"
            },
            {
                "id": "5",
                "title": "建造"
            },
            {
                "id": "5",
                "title": "电气"
            },
            {
                "id": "5",
                "title": "建造"
            },
            {
                "id": "5",
                "title": "消防"
            },
            {
                "id": "5",
                "title": "土木"
            },
            {
                "id": "5",
                "title": "机电"
            }]
            }
        // this.state= store.getState();
      }

  render() {
    const { navigate } = this.props.navigation;
    return (
        
      <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
                <Image 
                style={styles.headerimg}
                source={require('../../img/return.png')} 
                />
            </TouchableOpacity>
        </View>
        <View>
            <Text numberOfLines={2} style={styles.paperTitle}>机构事业部2019年7月8日公司内部考核</Text>
        </View>
        <View style={styles.testPaperDescribe}>
            <View style={styles.fraction}>
                <Text style={styles.totalScore}>试卷难度</Text>
                <Text style={styles.totalScore}>4.5</Text>
                <Text style={styles.totalScore}>，满分</Text>
                <Text style={styles.totalScore}>300</Text>
                <Text style={styles.totalScore}>分</Text>
            </View>
            <View style={styles.questionsTypes}>
                <Text style={styles.SubitemStyle}>共分为3个部分:</Text>
            </View>
            <View style={styles.questionsTypes}>
                <Text style={styles.SubitemStyle}>选择题</Text>
                <View style={{flexDirection:"row",}}>
                    <Text style={[styles.SubitemStyle,{fontSize:16,}]}>78</Text>
                    <Text style={[styles.SubitemStyle,{fontSize:11,marginTop:5}]}>分</Text>
                </View>
            </View>
            <View style={styles.questionsTypes}>
                <Text style={styles.SubitemStyle}>选择题</Text>
                <View style={{flexDirection:"row",}}>
                    <Text style={[styles.SubitemStyle,{fontSize:16,}]}>48</Text>
                    <Text style={[styles.SubitemStyle,{fontSize:11,marginTop:5}]}>分</Text>
                </View>
            </View>
            <View style={styles.questionsTypes}>
                <Text style={styles.SubitemStyle}>判断题</Text>
                <View style={{flexDirection:"row",}}>
                    <Text style={[styles.SubitemStyle,{fontSize:16,}]}>174</Text>
                    <Text style={[styles.SubitemStyle,{fontSize:11,marginTop:5,}]}>分</Text>
                </View>
            </View>
        </View>
        <View style={styles.examinationBeginsView}>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('TestpaperDetails',  {})}>
                <Text style={styles.examinationBegins}>开始答题</Text>
            </TouchableOpacity>
        </View>
     </View>
    )
  }
  renderItem() {
    // 数组
    var itemAry = [];
    // 颜色数组
    var colorAry = ['gray', 'green', 'blue', 'yellow', 'black', 'orange'];
    // 遍历
    for (var i = 0; i<colorAry.length; i++) {
        itemAry.push(
            <View
             key={i} 
             onLayout={event=>{this.layout = event.nativeEvent.layout}}
             style={[styles.itemStyle, {backgroundColor: colorAry[i]}]}></View>
        );
    }
    return itemAry;
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:"#f5f5f9",
  },
  header:{
    width:"100%",
    flexDirection:"row",
    height:40,
    justifyContent:"space-between",
    alignItems: 'center'
  },
  headerimg:{
    width:14,
    height:18,
  },
  paperTitle:{
    width:300,
    textAlign:'center',
    fontWeight:'400',
    fontSize:20,
    color:'#333',
    lineHeight: 28,
    marginBottom:60,
  },
  testPaperDescribe:{
    width:"80%",
    marginBottom:200,
  },
  totalScore: {
    fontWeight:'400',
    color:'#333',
},
questionsTypes: {
    marginTop:22,
    flexDirection:"row",
    justifyContent:"space-between",
},
fraction: {
    flexDirection:"row",
    marginTop:22,
},
 SubitemStyle:{
    color:'#666666',
  },
  examinationBegins:{
    color:'#0099ff',
    lineHeight:75,
  },
  examinationBeginsView:{
    height:75,
    width:"100%",
    borderTopWidth:1,
    textAlign:'center',
    alignItems: 'center',
    borderColor:"#e7e7e7",
  }
});