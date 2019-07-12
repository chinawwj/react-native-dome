import React, {Component} from 'react';
import { View, StyleSheet,Dimensions,Text, Alert,TouchableOpacity ,ScrollView,FlatList} from 'react-native';
// const imageData = require('../../../testinterface.json');
const { width, height } = Dimensions.get('window')
import CustomIconFont from '../../icon/CustomIconFont';
import TimeShow from '../TimeShow';

export default class TestpaperDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedSubjects:[],
            practiceSubject:[{
                "id": "1",
                "subject": "建设工程项目按建设工程性质分为新建项目和（）。",
                "title": "造价",
                answer:[{"id": "1",'option':'A',"answer": "生产性项目"},{"id": "1",'option':'B',"answer": "扩建项目"},{"id": "1",'option':'C',"answer": "改建项目"},{"id": "1",'option':'D',"answer": "重建项目"},{'option':'E',"answer": "扩建项目"}]
            },
            {
              "id": "2",
              "subject": "在合理的劳动组织与劳动条件下，规定劳动者在单位时间内所应完成合格品的数量标准称为（）。",
              "title": "造价",
              answer:[{"id": "2",'option':'A',"answer": "时间定额"},{"id": "2",'option':'B',"answer": "产量定额"},{"id": "2",'option':'C',"answer": "改建项目"},{"id": "2",'option':'D',"answer": "施工定额"},]
            },
            {
              "id": "3",
              "subject": "建在合理的劳动内所应完成合格品的数量标准称为（）。",
              "title": "造价",
              answer:[{"id": "3",'option':'A',"answer": "生产性项目"},{"id": "3",'option':'B',"answer": "扩建项目"},{"id": "3",'option':'C',"answer": "改建项目"},{"id": "3",'option':'D',"answer": "重建项目"},]
            },
            {
              "id": "4",
              "subject": "在合理的劳动组织与劳所应完成合格品的数量标准称为（）。",
              "title": "造价",
              answer:[{"id": "4",'option':'A',"answer": "改建项目"},{"id": "4",'option':'B',"answer": "生产性项目"},{"id": "4",'option':'C',"answer": "重建项目"},{"id": "4",'option':'D',"answer": "扩建项目"},]
            },
            {
              "id": "5",
              "subject": "在合理的劳动组织与劳动条件下，规定劳动者在单位时间内所应完成合标准称为（）。",
              "title": "造价",
              answer:[{"id": "5",'option':'A',"answer": "改建项目"},{"id": "5",'option':'B',"answer": "生产性项目"},{"id": "5",'option':'C',"answer": "重建项目"},{"id": "5",'option':'D',"answer": "扩建项目"},]
            },
            {
              "id": "6",
              "subject": "在合理的劳动组织与劳动条件下，规定劳动者在单位时的数量标准称为（）。",
              "title": "造价",
              answer:[{"id": "6",'option':'A',"answer": "改建项目"},{"id": "6",'option':'B',"answer": "生产性项目"},{"id": "6",'option':'C',"answer": "重建项目"},{"id": "6",'option':'D',"answer": "扩建项目"},]
            },
            {
              "id": "7",
              "subject": "在合理的劳动组织与劳动条件下，规定劳生产性项目的数量标准称为（）。",
              "title": "造价",
              answer:[{"id": "7",'option':'A',"answer": "改建项目"},{"id": "7",'option':'B',"answer": "生产性项目"},{"id": "7",'option':'C',"answer": "重建项目"},{"id": "7",'option':'D',"answer": "扩建项目"},]
            },
            {
              "id": "8",
              "subject": "项目按建设工程性质分建设工性质分为新建项目和（）。",
              "title": "造价",
              answer:[{"id": "8",'option':'A',"answer": "改建项目"},{"id": "8",'option':'B',"answer": "生产性项目"},{"id": "8",'option':'C',"answer": "重建项目"},{"id": "8",'option':'D',"answer": "扩建项目"},]
            }]
            ,
            // selected : {id : a }, 
          }
          //  
        // this.state= store.getState();
        // this.addAnswer =this.addAnswer.bind(this)
      }

  render() {
    console.log(this.state.practiceSubject)
    return (  
      <View style={styles.container}> 
        <ScrollView style={styles.scrollViewStyle}
                ref={(view) => {this.myScrollView = view; }}
                horizontal={true}
                alwaysBounceHorizontal={true}
                showsHorizontalScrollIndicator={false}  // 隐藏水平指示器
                showsVerticalScrollIndicator={false}    // 隐藏垂直指示器
                centerContent={true}
                pagingEnabled={true}    // 开启分页功能
                onScroll = {(event)=>{{
                    // console.log(this.layout.x);
                    //console.log(event.nativeEvent.contentOffset.x);水平滚动距离
                  }}}
                  onMomentumScrollEnd  = {(event)=>{{
                    var offsetX = event.nativeEvent.contentOffset.x; //滑动距离
                    var contentSizeWidth = event.nativeEvent.contentSize.width; //scrollView contentSize宽度
                    var oriageScrollWidth = event.nativeEvent.layoutMeasurement.width; //scrollView总宽度
                    var num = contentSizeWidth-oriageScrollWidth-offsetX
                    if (offsetX + oriageScrollWidth> contentSizeWidth){
                      Alert.alert('滑到底LE')
                    }
                  }}}
                  scrollEventThrottle = {200}
        >
             {this.renderItem()}
        </ScrollView>
        <View>
           <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Achievement',  {'name':'正式考试'})}>
                <Text style={styles.examinationBegins}>考试完成</Text>
            </TouchableOpacity>
        </View>

     </View>
    )
  }
  renderItem() {
    // 数组
    var itemAry = [];
    // 颜色数组['gray', 'green', 'blue', 'yellow', 'black', 'orange'] {backgroundColor: colorAry[i]}
    var colorAry = this.state.practiceSubject;
    // 遍历
    for (var i = 0; i<colorAry.length; i++) {
        itemAry.push(
            <View
             key={i} 
             onLayout={event=>{this.layout = event.nativeEvent.layout}}
             style={[styles.itemStyle,]}>
               <View style={styles.actionBar}>
                  <View><CustomIconFont name={'cancel'} size={24} color={'#333'}/></View>
                  <View style={styles.level}>
                    <CustomIconFont style={styles.rightSpace} name={'details'} size={20} color={'#333'}/>
                    <CustomIconFont style={styles.rightSpace} name={'shoucang'} size={20} color={'#333'}/>
                    <TimeShow />
                  </View>
               </View>
               <View><Text>单项选择题</Text></View>
               <View style={styles.level}><Text>{colorAry[i].id}.</Text><Text>{colorAry[i].subject}</Text></View>
                <FlatList
                  horizontal={false}
                  numColumns={1}
                  keyExtractor={(item, index) => `item-${index}`}
                  data={colorAry[i].answer}
                  renderItem={({item,index}) => 
                    <View 
                        style={[styles.level,styles.topSpace]}>
                      <Text
                      onPress={()=>{this.addAnswer(item,index)}}
                      style={item.active?styles.selectedStatus:styles.optionAnswer}>{item.option}</Text>
                      {/* style = {[unselected, indexof("a") > -1 && selected ]} */}
                      <Text>{item.answer}</Text>
                    </View>
                  }
                  />
             </View>
        );
    }
    return itemAry;
  }
  addAnswer(data,index){
    // console.log(parseInt(data.id)-1);
    data.active=true;
    this.setState((prevState)=>{
      const practiceSubject=[...prevState.practiceSubject];
      practiceSubject.splice(parseInt(data.id)-1,1,data);
      return {practiceSubject}
    });
    
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:"#f5f5f9",
  },
  rightSpace:{
    marginRight:10,
  },
  topSpace:{
    marginTop:20,
    // backgroundColor:'#787578'
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
  actionBar:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems: 'center',
  },
  level:{
    flexDirection:"row",
    alignItems: 'center',
  },
  optionAnswer:{
    width:24,
    height:24,
    borderWidth:1,
    marginRight:5,
    lineHeight: 24,
    textAlign:'center',
    borderColor:"#189ad4",
    // color:'#189ad4',
    borderRadius:12,
  },
  selectedStatus:{
    width:24,
    height:24,
    borderWidth:1,
    marginRight:5,
    lineHeight: 24,
    textAlign:'center',
    borderColor:"#189ad4",
    color:'#fff',
    borderRadius:12,
    backgroundColor:'#189ad4',
  },
  paperTitle:{
    width:300,
    textAlign:'center',
    fontWeight:'600',
    fontSize:20,
    color:'#333',
    lineHeight: 28,
  },
  scrollViewStyle: {
    // 背景色
    // flex:1,
    // backgroundColor:'red',
    backgroundColor:'#fff',
    // height:height,
},
itemStyle: {
    // 尺寸
    padding:10,
    width:width,
    height:height,
    backgroundColor:'#fff',
},
  headerimg:{
    width:14,
    height:18,
  },
  headerimg:{
    width:14,
    height:18,
  },
});