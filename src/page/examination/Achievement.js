import React, { Component } from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import CustomIconFont from '../../icon/CustomIconFont';
import PercentageCircle from 'react-native-percentage-circle';


export default class Achievement extends Component {
  constructor(props) {
    super(props);

    this.state = {
        fraction: 80,
        indeterminate: true,
        titleNumber:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
        flatListWeight:10,
        type:'',
    };
    this.rendersubItems=this.rendersubItems.bind(this);
  }

  componentDidMount(){
    let type = this.props.navigation.state.params.name;
    this.setState (()=>({
      type:type
  }))

}

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <CustomIconFont 
                  // onPress={() => this.props.navigation.goBack()}
                  style={styles.rightSpace} 
                  name={'toLeft'} 
                  size={20} color={'#333'}/>
                <Text>成绩详情</Text>
                <View style={{width:20,height:20,}}></View>
            </View>
            <PercentageCircle radius={60} percent={this.state.fraction} color={"#3498db"}>
                <Text>得分</Text>   
                <View>
                  <Text><Text style={{fontSize:35,}}>{this.state.fraction}</Text>分</Text>   
                </View>   
            </PercentageCircle> 
            <View style={[styles.level,styles.examinationTime]} >
              <View style={styles.level} >
                <CustomIconFont 
                      style={styles.rightSpace} 
                      name={'times'} 
                      size={20} color={'#333'}/>
                <Text>0'37"</Text>      
              </View>
              <View style={styles.level} >
                <CustomIconFont 
                      style={styles.rightSpace} 
                      name={'times'} 
                      size={20} color={'#333'}/>
                <Text>5.0</Text>  
              </View>
            </View>
            <View style={[styles.level,styles.leftAlignment]} >
              <Text style={{fontSize:16,}}>答题卡</Text>
            </View>
            <View style={[styles.level,styles.leftAlignment,styles.questionType]} >
              <Text>选择题</Text>
            </View>
            <View style={[styles.level,styles.subItemsNum,]}>
              <FlatList
              horizontal={false}
              numColumns={5}
              data={this.state.titleNumber}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.rendersubItems}
              />
            </View>

            {this.state.type=='模拟练习'?
                <View style={[styles.analysisData]}>                  
                  <Text>重新开始</Text>
                </View>
                :
                <View style={[styles.analysisData]}>                  
                  <Text>结束考试</Text>
                </View>
            } 
      </View>
          
    );
  }
  rendersubItems({ item }) {
    // const flatListWeight = 65*this.state.titleNumber.length/4
    return (
      <View style={styles.ItemsNum}>
        <Text style={styles.ItemsNumFont}>{item}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingVertical: 20,
    },
    header:{
      width:"100%",
      height:40,
      flexDirection: 'row',
      justifyContent:"space-between",
      alignItems: 'center',
      borderBottomWidth:1,
      borderColor:'#e5e5e5',
      marginBottom:35,
      },
    examinationTime: {
      marginTop:35,
      marginBottom:35,
      width:"60%",
      justifyContent:"space-between",
    },
    level:{
      flexDirection:"row",
      alignItems: 'center',
    },
    subItemsNum:{
      width:'100%',
      flexDirection:"row",
      flexWrap:'wrap',
      textAlign:'center',
    },
    ItemsNum:{
      width:50,
      height:50,
      margin:15,
      marginTop:10,
      borderWidth:1,
      borderColor:'#e5e5e5',
      borderRadius:25,
    },
    ItemsNumFont:{
      lineHeight:50,
      color:'#3498db',
      textAlign:'center',
      fontSize:18,
    },
    leftAlignment:{
      width:'90%',
      justifyContent:'flex-start',
    },
    questionType:{
      marginTop:15,
    },
  });