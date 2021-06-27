// import { put, takeLatest,take,call,takeEvery } from "redux-saga/effects";
const defaultState={

    inputValue:'默认值',
    
    list:[1,2]
    }

export default (state=defaultState,action) => {
    if(action.type==='TEXT_INPUT_VALUE'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value
        return newState
        }
// 添加数组
if(action.type==='LIST_VALUE_PUSH'){
    const newState=JSON.parse(JSON.stringify(state));
    newState.list.push(action.value);
    newState.inputValue="";
    return newState
    }
    
    // 删除数组
if(action.type==='DELETE_LIST_KEY'){
    const newState=JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState
    }
    return state;
 }
