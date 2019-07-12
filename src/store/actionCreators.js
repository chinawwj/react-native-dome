import {CHANGE_USERNAME,CHANGE_PASSWORD,ACCOUNT_VERIFICATION,INIT_DATA_ACTION,SET_USER} from './actionTypes'
import axios from 'axios';

export const  setUserAction = (userData)=>({
    type: SET_USER,
    userData
})
export const  getUsernameAction = (username)=>({
    type: CHANGE_USERNAME,
    username
})
export const  getPasswordAction = (password)=>({
    type: CHANGE_PASSWORD,
    password
})
export const  accountVerification = (state)=>({
    type: ACCOUNT_VERIFICATION,
    state
})
export const  initDataAction = (data)=>({
    type: INIT_DATA_ACTION,
    data
})
export const  getDataList = ()=>{
    return(dispatch)=> {
        axios.get('')
        成功后执行
        .then((res)=>{    
            const data = res.data;
            const action =initDataAction(data)
            dispatch(action);
        })
        失败后执行
        .catch(()=>{alert("error")})
    }
}