import React, {Component} from 'react';
import { View, StyleSheet,Dimensions,Text, Alert,TouchableOpacity ,ScrollView,FlatList} from 'react-native';
// const imageData = require('../../../testinterface.json');
const { width, height } = Dimensions.get('window')
import CustomIconFont from '../../icon/CustomIconFont';
import TimeShow from '../TimeShow';
import Answerlist from './Answerlist';
import {getDataList} from '../../store/actionCreators'
import store from '../../store/index';
import axios from 'axios';

export default class TrainingBegins extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedSubjects:[],
            practiceSubject:[{
                "id": "1",
                "show":false,
                "subject": "建设工程项目按建设工程性质分为新建项目和（）。",
                "title": "造价",
                answer:[{"id": "1",'option':'A',"answer": "生产性项目","active":false},{"id": "1",'option':'B',"answer": "扩建项目","active":false},{"id": "1",'option':'C',"answer": "改建项目","active":false},{"id": "1",'option':'D',"answer": "重建项目","active":false},{"id": "1",'option':'E',"answer": "扩建项目","active":false}]
            },
            {
              "id": "2",
              "show":false,
              "subject": "在合理的劳动组织与劳动条件下，规定劳动者在单位时间内所应完成合格品的数量标准称为（）。",
              "title": "造价",
              answer:[{"id": "2",'option':'A',"answer": "时间定目","active":false},{"id": "2",'option':'B',"answer": "产量定目","active":false},{"id": "2",'option':'C',"answer": "改建项目","active":false},{"id": "2",'option':'D',"answer": "施工定目","active":false},]
            },
            {
              "id": "3",
              "show":false,
              "subject": "建在合理的劳动内所应完成合格品的数量标准称为（）。",
              "title": "造价",
              answer:[{"id": "3",'option':'A',"answer": "生产性项目","active":false},{"id": "3",'option':'B',"answer": "扩建项目","active":false},{"id": "3",'option':'C',"answer": "改建项目","active":false},{"id": "3",'option':'D',"answer": "重建项目","active":false},]
            },
            {
              "id": "4",
              "subject": "在合理的劳动组织与劳所应完成合格品的数量标准称为（）。",
              "title": "造价",
              answer:[{"id": "4",'option':'A',"answer": "改建项目","active":false},{"id": "4",'option':'B',"answer": "生产性项目","active":false},{"id": "4",'option':'C',"answer": "重建项目","active":false},{"id": "4",'option':'D',"answer": "扩建项目","active":false},]
            },
            {
              "id": "5",
              "show":false,
              "subject": "在合理的劳动组织与劳动条件下，规定劳动者在单位时间内所应完成合标准称为（）。",
              "title": "造价",
              answer:[{"id": "5",'option':'A',"answer": "改建项目","active":false},{"id": "5",'option':'B',"answer": "生产性项目","active":false},{"id": "5",'option':'C',"answer": "重建项目","active":false},{"id": "5",'option':'D',"answer": "扩建项目","active":false},]
            },
            {
              "id": "6",
              "show":false,
              "subject": "在合理的劳动组织与劳动条件下，规定劳动者在单位时的数量标准称为（）。",
              "title": "造价",
              answer:[{"id": "6",'option':'A',"answer": "改建项目","active":false},{"id": "6",'option':'B',"answer": "生产性项目","active":false},{"id": "6",'option':'C',"answer": "重建项目","active":false},{"id": "6",'option':'D',"answer": "扩建项目","active":false},]
            },
            {
              "id": "7",
              "show":false,
              "subject": "在合理的劳动组织与劳动条件下，规定劳生产性项目的数量标准称为（）。",
              "title": "造价",
              answer:[{"id": "7",'option':'A',"answer": "改建项目","active":false},{"id": "7",'option':'B',"answer": "生产性项目","active":false},{"id": "7",'option':'C',"answer": "重建项目","active":false},{"id": "7",'option':'D',"answer": "扩建项目","active":false},]
            },
            {
              "id": "8",
              "show":false,
              "subject": "项目按建设工程性质分建设工性质分为新建项目和（）。",
              "title": "造价",
              answer:[{"id": "8",'option':'A',"answer": "改建项目","active":false},{"id": "8",'option':'B',"answer": "生产性项目","active":false},{"id": "8",'option':'C',"answer": "重建项目","active":false},{"id": "8",'option':'D',"answer": "扩建项目","active":false},]
            }]
            ,
            type:'',
            currentTitle:0,
            // selected : [{id : a }], 
          }
           
        // this.state= store.getState();
        this.addAnswer =this.addAnswer.bind(this)
        this.renderItem =this.renderItem.bind(this)
      }
    componentDidMount(){
        let type = this.props.navigation.state.params.name;
        this.setState (()=>({
          type:type
      }))

      // this.DataFilling();
      // const action =getDataList();
      // store.dispatch(action);
    }
  render() {
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
                    const currentTitle = parseInt(event.nativeEvent.contentOffset.x/event.nativeEvent.layoutMeasurement.width)
                    this.setState (()=>({
                      currentTitle:currentTitle
                  }))
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
                  <View><CustomIconFont name={'cancel'} size={28} color={'#333'}/></View>
                  <View style={styles.level}>
                    <TimeShow />
                    <CustomIconFont style={styles.rightSpace} name={'details'} size={20} color={'#333'}/>
                  </View>
               </View>
               <View style={[styles.level,styles.questiontypeHeader]}>
                  <Text style={styles.questiontype}>{this.state.type}</Text>
                  <View  style={[styles.level]}>
                    <Text style={styles.questiontype}>{colorAry[i].id}</Text><Text>/</Text><Text>8</Text>
                  </View>
               </View>
               <View style={[styles.level,{padding:10,}]}><Text>{colorAry[i].subject}</Text></View>
               <Answerlist 
               answersContent = {colorAry[i].answer} 
               index={colorAry[i].id} 
               currentTitle={this.state.currentTitle}
               addAnswer = {this.addAnswer}  />
                <View style={[styles.level,styles.endButtonList]}>
                  <TouchableOpacity onPress={() =>{ this.onPressItem(this.state.currentTitle)}}>
                        <Text style={[styles.endButton,styles.analysis]}>答案解析</Text>
                    </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Achievement',  {'name':'模拟练习'})}>
                        <Text style={[styles.endButton,styles.examinationBegins]}>考试完成</Text>
                    </TouchableOpacity>
                </View>
                {colorAry[i].show?
                      <View style={[styles.analysisData]}>                  
                        <View style={[styles.level]}><Text>正确答案是</Text><Text>B</Text><Text>,你的答案是</Text><Text>A</Text></View>
                        <View>
                          <Text>答案解析：</Text>
                          <Text>行滑出渲染区域之外后，其内部状态将不会保留。请确保你在行组件以外的地方保留了数据</Text>
                        </View>
                      </View>:null
                    }
            </View>
        );
    }
    return itemAry;
  }
  addAnswer=(data,index)=>{
    this.setState((prevState)=>{
      const practiceSubject=[...prevState.practiceSubject];
      const indexLength = practiceSubject[parseInt(data.id)-1].answer.length;
      console.log(indexLength);
      practiceSubject[parseInt(data.id)-1].answer[index].active =!practiceSubject[parseInt(data.id)-1].answer[index].active;
      return {practiceSubject}
    });
  }
  onPressItem=(index)=>{
    console.log(index)
    this.setState((prevState)=>{
    const practiceSubject=[...prevState.practiceSubject];
    practiceSubject[index].show =!practiceSubject[index].show;
      return {practiceSubject}
    });
  }
}

/**
 * 将仓库的state映射到props(获取state)
 * @param state
 */
const mapStateToProps = (state) => {
  return {
      list: state.getIn(['practice', 'list'])
  }
}

/**
*  将dispatch映射到props(改变state)
* @param dispatch
*/
const mapDispatchToProps = (dispatch) => {
  return {
      // 获取数据
      DataFilling () {
          dispatch(getDataList())
      },
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
    marginLeft:10,
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
    marginTop:10,
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
    borderColor:"#cccccc",
    color:'#999999',
    borderRadius:12,
  },
  selectedStatus:{
    width:24,
    height:24,
    borderWidth:1,
    marginRight:5,
    lineHeight: 24,
    textAlign:'center',
    borderColor:"#999999",
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
    backgroundColor:'#fff',
},
itemStyle: {
    // 尺寸
    width:width,
    height:height-24,
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
  questiontypeHeader:{
    width:"100%",
    height:48,
    padding:10,
    lineHeight: 48,
    borderWidth:1,
    borderLeftWidth:0,
    borderRightWidth:0,
    borderColor:"#e7e7e7",
    justifyContent:"space-between",
    alignItems: 'center'
  },
  questiontype:{
    fontSize:16,
    color:'#000',
    fontWeight:'600',
  },
  endButtonList:{
    width:'100%',
    marginTop:20,
    marginBottom:20,
    justifyContent:"space-between",
  },
  endButton:{
    width:100,
    height:48,
    fontSize:16,
    color:'#fff',
    lineHeight: 48,
    borderRadius:4,
    marginLeft:15,
    marginRight:15,
    textAlign:'center',
    backgroundColor:'#2bc8a0',
  },
  analysisData:{
    width:'100%',
    height:111,
    top: 0,
    position:'relative',
    backgroundColor:'#fff',
    borderTopWidth:1,
    borderColor:"#e7e7e7",
  },
});