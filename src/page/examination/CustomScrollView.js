import React, { Component } from 'react';
    import {
        AppRegistry,
        StyleSheet,
        Text,
        View,
        ScrollView,
        Image
    } from 'react-native';

    // 视图
    export default class CustomScrollView extends React.Component ({
        // 先初始化页码,确定初始化后显示哪个页面
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
          },
        getInitialState(){
            return{
                // 初始化当前页码
                currentPage:0
            }
        },

        render(){
            return(
                <View style={styles.container}>
                    {/* 实例化ScrollView */}
                    <ScrollView style={styles.scrollViewStyle}
                                horizontal={true}   // 水平方向
                                showsHorizontalScrollIndicator={false}  // 隐藏水平指示器
                                showsVerticalScrollIndicator={false}    // 隐藏垂直指示器
                                pagingEnabled={true}    // 开启分页功能
                                onMomentumScrollEnd={this.onAnimationEnd}   // 当一帧滚动完毕的时候调用
                    >
                        {/* 实例化内部子视图 */}
                        {this.renderItem()}
                    </ScrollView>

                    {/* 实例化分页指示器 */}
                    <View style={styles.pagingIndicatorStyle}>
                        {this.renderPagingIndicator()}
                    </View>
                </View>
            );
        },

        // 监听滚动
        onAnimationEnd(e){
            // 求出水平方向上的偏移量
            var offSetX = e.nativeEvent.contentOffset.x;
            // 计算当前页码
            var currentPage = offSetX / width;
            // 重新绘制UI
            this.setState({
                currentPage:currentPage
            });
        },

        // 分页指示器
        renderPagingIndicator() {
            var itemAry = [], autoColor;

            // 获取json中图片
            var  imgAry =  this.state.practiceSubject;

            // 根据json数据实例化视图
            for (var i = 0; i<imgAry.length; i++) {
                // 取出单个对象
                var item = imgAry[i];

                // 跟随当前页改变对应 点 的颜色
                autoColor = (this.state.currentPage === i) ? {color:'orange'} : {color:'white'}

                // 将子视图放进 itemAry
                itemAry.push(
                    // 实例化视图
                    <Text key={i} style={[{fontSize:30}, autoColor]}>•</Text>
                )   
            }

            // 返回数组
            return itemAry;
        },

        // scrollView子视图
        renderItem() {
            var itemAry = [];

            // 获取json中图片
            var imgAry = imageData.data;

            // 根据json数据实例化视图
            for (var i = 0; i<imgAry.length; i++) {
                // 取出单个对象
                var item = imgAry[i];
                // 将子视图放进 itemAry
                itemAry.push(
                    // 实例化子视图
                    <Text key={i} style={styles.itemStyle}>{item.title}</Text>
                )
            }

            // 返回数组
            return itemAry;
        }
    })

    // 样式
    const styles = StyleSheet.create({
        container: {
            backgroundColor:'white'
        },

        scrollViewStyle: {
            // 背景色
            backgroundColor:'yellow',
            // 上边距
            marginTop:20
        },

        itemStyle: {
            // 尺寸
            width:width,
            height:200,
            // 图片等比例拉伸
            resizeMode:'contain'
        },

        pagingIndicatorStyle: {
            // 背景色(使背景色为全透明)
            backgroundColor:'rgba(255,255,255,0.0)',
            // 尺寸
            width:width,
            // 主轴方向与对齐方式
            flexDirection:'row',
            justifyContent:'center',
            // 绝对定位,使页码指示器盖在scrollView上面
            position:'absolute',
            bottom:0
        }
    });

