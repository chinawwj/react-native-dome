import {INIT_DATA_ACTION} from '../actionTypes'
// import console = require('console');
const defaultState = {
    list:[],
    homeImg:[require('../../img/ceshi1.jpg'),require('../../img/ceshi2.png'),require('../../img/ceshi3.jpg'),require('../../img/ceshi4.jpg')],
    CategoryData:[{'category_name':'数学','category_img':require("../../img/cancel.png")},{'category_name':'英语','category_img':require("../../img/cancel.png")},
    {'category_name':'政治','category_img':require("../../img/cancel.png")},{'category_name':'计算机','category_img':require("../../img/cancel.png")},
    {'category_name':'设计考研','category_img':require("../../img/cancel.png")},{'category_name':'管理联考','category_img':require("../../img/cancel.png")},
    {'category_name':'农科化学','category_img':require("../../img/cancel.png")},{'category_name':'四六级','category_img':require("../../img/cancel.png")},
    {'category_name':'期末不挂','category_img':require("../../img/cancel.png")},{'category_name':'西医','category_img':require("../../img/cancel.png")},
                ]
}
// 返回的必须是一个函数
// 两个参数分别是前一次的数据，和当前操作的命令action
export default (state = defaultState,action)=> {
    if(action.type===INIT_DATA_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list=action.data;
        return newState;
    }
    return state;
}