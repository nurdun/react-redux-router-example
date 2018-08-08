/*===== reducer =====*/

import * as types from '../actionTypes/actionTypes';

const initialState = {  
    loginState:0,
    pageTitle:'',
    username:null
}
export const setLogState = (state = initialState,action)=>{
    switch(action.type){
        case types.LOG_IN:
            return {
                loginState: 1,
                pageTitle:'HOME',
                userData:action.userData
            }
        case 'LOG_OUT':
            return {
                loginState: -1,
                pageTitle:'',
                username:null
            }
        default:
            return initialState;
    }
}