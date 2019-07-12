import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default class Answerlist extends Component {
  constructor(props){
    super(props);
  }
  render() {
    //   console.log(this.props.answersContent)
    //   console.log(this.props.index)
    //   console.log(this.props.currentTitle)
    return (
      <View >
        {
            this.props.answersContent.map((item,index)=>{
                return (
                    <View  
                    key={index}  
                    style={[styles.level,{padding:10,}]}>
                        <TouchableOpacity  
                        style={[styles.level]}
                        onPress={()=>{this.props.addAnswer(item,index)}}>
                        {item.active ?
                        <Text style={styles.selectedStatus}>{item.option}</Text>
                            :
                        <Text style={styles.optionAnswer}>{item.option}</Text>}
                        <Text>{item.answer}</Text>
                        </TouchableOpacity>
                        
                    </View>
                )
              })
        }
      </View>
    );
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
    //   borderWidth:1,
      marginRight:5,
      lineHeight: 24,
      textAlign:'center',
      borderColor:"#999999",
      color:'#fff',
      borderRadius:12,
      backgroundColor:'#2bc8a0',
    },
  });
