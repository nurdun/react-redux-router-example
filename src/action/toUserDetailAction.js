import * as types from '../actionTypes/actionTypes';
import userDetailApi from '../API/userDetailAPI'

const toUserDetailAction = ()=>{
    return dispach =>{
        return userDetailApi.getUserDetail()
        .then(userDetailData=>{
            dispach(getUserDetailSuccess(userDetailData));
        })
    }
}

const getUserDetailSuccess = (userDetailData)=>{
    return {
        type:types.USER_DETAIL_SUCCESS,
        userDetailData
    }
}

export { toUserDetailAction ,getUserDetailSuccess }
