import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
export default class TimeShow extends Component {
  constructor(props){
    super(props);
    this.state={
      hour:'',
      minutes:'50',
      seconds:'00',
    }
    // countTime();
  }
  render() {
    return (
      <View>
        <Text style={{fontSize:16,color:'#333'}}>{this.state.hour}{this.state.minutes}:{this.state.seconds}</Text>
      </View>
    );
  }
  // 实现在这里借小时
  get_hour() {
    var hu=this.state.hour; //获取分钟
    if (hu>0) { //分钟不为0，则直接借走1分钟
      hu--; //分钟减一
      this.setState({hour:hu}); //更改分钟状态
      return 1; //借走一分钟
    }
    else if (hu==0) { //分钟为0，从小时哪里借
      this.setState({hour:'00'}); //更改分钟状态
      return 0;
    }
  }
  // 实现在这里借分钟
  get_minutes() {
    var mt=this.state.minutes; //获取分钟
    if (mt>0) { //分钟不为0，则直接借走1分钟
      mt--; //分钟减一
      this.setState({minutes:mt}); //更改分钟状态
      return 1; //借走一分钟
    }
    else if (mt==0) { //分钟为0，从小时哪里借
      var get_hu=this.get_hour();
      if (get_hu==1) { //借到了
        this.setState({minutes:59}); //更改分钟状态
        return 1;
      }
      else{
        this.setState({minutes:'00'}); //没借到，更改分钟状态
        return 0;
      }
    }
  }
  // 计时函数
  componentDidMount(){
    this._timer=setInterval(()=>{
        var ct=this.state.seconds; //获取秒
        if (ct>0) { //如果秒大于0，则执行减1
          ct--;
          this.setState({seconds:ct}); //更改秒的状态
        }
        else if (ct==0) { // 秒为0，去借分钟
          var get_mt=this.get_minutes();
          if (get_mt==1) { //借分钟成功
            ct=59;
            this.setState({seconds:ct}); //将秒设置为59
          }
          else if (get_mt==0) { //没借到分钟，说明计时结束
            this._timer&&clearInterval(this._timer);
          }
        }
      },1000);
  }
  componentWillUnmount(){
    this._timer&&clearInterval(this._timer);
  }
}
// AppRegistry.registerComponent('Login', () => Login);