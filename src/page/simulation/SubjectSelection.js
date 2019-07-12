import React, {Component} from 'react';
import { View, StyleSheet, Text, Button,Image,Alert,TouchableOpacity,FlatList} from 'react-native';
import store from '../../store/index'
import CustomIconFont from '../../icon/CustomIconFont';
import {getUsernameAction,getPasswordAction,accountVerification} from '../../store/actionCreators'

export default class SubjectSelection extends React.Component {
    static navigationOptions = {
        title: '科目选择',
    };
  
  constructor(props) {
    super(props);
    this.state = {
        selectedSubjects:[],
        practiceSubject:[{ key:'0', text:'造价', },{ key:'1', text:'机电', },{ key:'2', text:'土木', },{ key:'3', text:'消防', },{ key:'4', text:'电气', }
        ,{ key:'5', text:'安全', },{ key:'6', text:'监理', },{ key:'7', text:'建造', },{ key:'8', text:'建造', }]
		}
    // this.state= store.getState();
    this.addSubject=this.addSubject.bind(this);
    this.deleteSubject=this.deleteSubject.bind(this);
    // this.rendersubItems=this.rendersubItems.bind(this);
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
        </View>
        <View style={styles.ExerciseTitle} >
            <Text style={styles.fontStyle} >已添加题库</Text>
            <Text style={styles.fontStyle} >（按住拖动调整顺序）</Text>
        </View>
        <View style={styles.SelectedWarp} >
            <FlatList
            data={this.state.selectedSubjects}
            keyExtractor={(item, index) => index.toString()}
            // renderItem={this.rendersubItems}
            renderItem={({ item, index }) => (
              <View style={styles.SelectedList}>
                <Text style={styles.Selecteditem}>{item}</Text>
                <CustomIconFont  onPress={()=>{this.deleteSubject(index)}} name={'delete'} size={15} color={'#333'}/>
              </View>)
          }
            />
        </View>
        <View style={styles.Partitionline}>
            <Image source={require('../../img/Dottedline.png')} />
        </View>
        <View style={styles.allItems}>
            <View style={{marginBottom: 20,}}><Text  style={{fontWeight:'600',color:'#333',}}>添加新题库</Text></View>
            <View style={styles.subItemsBox}>
              <FlatList
                horizontal={false}
                numColumns={3}
                keyExtractor={(item, index) => `item-${index}`}
                data={this.state.practiceSubject}
                renderItem={({item}) => <Text style={styles.subItems} onPress={()=>{this.addSubject(item.text,item.key)}}>{item.text}</Text>}
                />
            </View>
        </View>
        <View style={[styles.saveOptions]}>
          <Button
            color="#0066CC"
            title={'保存'} 
            onPress={()=>{this.addSubject()}}
          />
        </View>
      </View>
    )
  }
  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson)
        this.setState({

        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  // rendersubItems({item}) {
  //   return (
  //     <View style={styles.SelectedList}>
  //       <Text style={styles.Selecteditem}>{item}</Text>
  //        <CustomIconFont  onPress={()=>{this.deleteSubject(this.state.selectedSubjects[0].item)}} name={'delete'} size={15} color={'#333'}/>
  //     </View>
  //   );
  // }

  addSubject(item){
    this.setState ((prevState)=>({
      selectedSubjects:[...prevState.selectedSubjects,item],
  }),()=>{ //第二个回调函数里面
    console.log( this.state.selectedSubjects);
})
  }
  deleteSubject(index){
    this.setState((prevState)=>{
      const selectedSubjects=[...prevState.selectedSubjects];
      selectedSubjects.splice(index,1);
      return {selectedSubjects}
  });
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
  ExerciseTitle:{
    alignItems: 'center',
    color:'#333',
    marginTop:10,
    marginBottom: 20,
  },
  fontStyle:{
    fontWeight:'600',
  },
  SelectedWarp:{
    height:126,
    borderTopWidth:1,
  },
  SelectedList:{
    width:184,
    borderWidth:1,
    borderTopWidth:0,
    backgroundColor:'#fff',
    flexDirection:"row",
    alignItems: 'center',
  },
  Selecteditem:{
    width:154,
    height:30,
    lineHeight:30,
    textAlign:'center',
  },
  Partitionline:{
    marginTop:20,
    marginBottom: 20,
  },
  allItems:{
    width:'100%',
    alignItems: 'center',
  },
  subItems:{
    width:78,
    height:36,
    lineHeight:36,
    borderWidth:1,
    backgroundColor:'#fff',
    borderColor:'#797979',
    flex:1,
    textAlign:'center',
    color:'#333',
    marginTop:20,
    marginLeft: 20,
  },
  subItemsBox:{
    width:'75%',
    height:170,
    flexDirection:"row",
    flexWrap:'wrap',
    marginRight: 20,
  },
  saveOptions:{
    width:78,
    marginTop:40,
  },
});