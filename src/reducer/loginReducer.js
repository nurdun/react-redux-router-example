/*===== reducer =====*/

import * as types from '../actionTypes/loginTypes';

const initialState = {  
    loginState:0,
    username:null
}
export const setLogState = (state = initialState,action)=>{
    switch(action.type){
        case types.LOG_IN:
            return {
                loginState: 1,
                userData:action.userData
            }
        case 'LOG_OUT':
            return {
                loginState: -1,
                username:null
            }
        default:
            return initialState;
    }
}