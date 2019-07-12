# react-native-dome

构建项目react-native init Answerapp

运行项目 （再打开模拟器的前提下）

cd Answerapp

react-native run-android



请求数据使用fetch：

fetch('https://mywebsite.com/endpoint/', {

method: 'POST',

headers: {

Accept: 'application/json',

'Content-Type': 'application/json', },

body: JSON.stringify(

{firstParam: 'yourValue', secondParam: 'yourOtherValue', }),

});

1.JSON.stringify（）指定请求道德数据中的特定数据选择提取

2.Content-Type 发送或者请求的数据格式



在谷歌浏览器http://localhost:8081/debugger-ui/中调试

进入出现报错 播放器play（）设置错误

进入 chrome://flags/#autoplay-policy


勾选操作
报错 -

Warning: ViewPagerAndroid has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/viewpager' instead of 'react-native'. See https://github.com/react-nati...

解决方案

yarn add @react-native-community/viewpager

react-native link @react-native-community/viewpager

修改.node_modules下react-native-swiper文件下src目录index.js中的 ViewPagerAndroid 组件为 ViewPager (使用前先引用 : import ViewPager from "@react-native-community/viewpager";)

报错：

使用<FlatList />渲染列表时，使用到renderItem={this.rendersubItems}

然后在rendersubItems函数里面的组件上添加点击事件

<CustomIconFont onPress={()=>{this.deleteSubject(item)}}/>

出现报错 _this3.deleteSubject is not a function

原因是因为rendersubItems的this指向与deleteSubject的不同需要在constructor函数中：

this.rendersubItems=this.rendersubItems.bind(this);
