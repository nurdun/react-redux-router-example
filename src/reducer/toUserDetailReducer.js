/**
 * reducer
 */

import * as types from '../actionTypes/actionTypes';

const initialState = {
    pageState:0,
    pageTitle:'',
    userDetailData:null
}

export const toUserDetailState = (state=initialState,action)=>{
    switch (action.type){
        case types.USER_DETAIL_SUCCESS:
            return {
                pageState:1,
                pageTitle:'User Detail',
                userDetailData:action.userDetailData
            }
        case types.EXIT_USER_DETAIL:
            return {
                pageState:0,
                pageTitle:'',
                userDetailData:null
            }
        default:
            return initialState;
    }
}