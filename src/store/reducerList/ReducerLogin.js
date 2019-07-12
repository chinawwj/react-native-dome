import {CHANGE_USERNAME,CHANGE_PASSWORD,ACCOUNT_VERIFICATION,SET_USER} from '../actionTypes'
// import console = require('console');
const defaultState = {
    password:'',
    username:'',
    userData:[],
}
// 返回的必须是一个函数
// 两个参数分别是前一次的数据，和当前操作的命令action
export default (state = defaultState,action)=> {
    if(action.type===CHANGE_USERNAME){
        const newState = JSON.parse(JSON.stringify(state));
        newState.username=action.username;
        return newState;
    }
    if(action.type===SET_USER){
        const newState = JSON.parse(JSON.stringify(state));
        newState.userData=action.userData;
        return newState;
    }
    if(action.type===CHANGE_PASSWORD){
        const newState = JSON.parse(JSON.stringify(state));
        newState.password=action.password;
        return newState;
    }
    if(action.type===ACCOUNT_VERIFICATION){
        const newState = JSON.parse(JSON.stringify(state));
        newState.username=action.state.username;
        newState.password=action.state.password;
        return newState;
    }

    return state;
}