import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import store from '../../store/index';

export default class CategoryList extends Component {
  constructor(props){
    super(props);
    this.state= store.getState();
  }

  render() {
    // console.log(this.state.practice.CategoryData)
    return (
      <View style={[styles.level,styles.subjectBox]}>
        {
            this.state.practice.CategoryData.map((item,index)=>{
                return (
                    <TouchableOpacity
                    key={index}  
                    style={[styles.optionSubject,]}
                    onPress={() => this.props.navigation.navigate("Practice",  {'subject':item.category_name})}>
                        <Image resizeMode="cover" source={item.category_img} style={styles.subjectImg} />
                        <Text  style={{flexWrap:'wrap'}}>{item.category_name}</Text>
                    </TouchableOpacity>
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
    optionSubject:{
      width:60,
      height:70,
      alignItems: 'center',
      color:'#666666',
      margin:11,
    },
    subjectBox:{
    flexWrap:'wrap',
    marginTop:10,
    paddingBottom:10,
    borderBottomWidth:1,
    borderColor:"#e6e6e6",
    },
    subjectImg:{
      marginBottom:8,
    },
    selectedStatus:{
      width:24,
      height:24,
      marginRight:5,
      lineHeight: 24,
      textAlign:'center',
      
      color:'#fff',
      borderRadius:12,
      backgroundColor:'#2bc8a0',
    },
  });
