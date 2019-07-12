import { combineReducers } from 'redux'
import practiceReducer from './reducerList/ReducerPractice';
import loginReducer from './reducerList/ReducerLogin';

const reducer = combineReducers({
    login:loginReducer,
    practice:practiceReducer,
})

export default reducer;