//login actions

import * as types from '../actionTypes/actionTypes';
import LoginApi from '../API/loginAPI'
 
// const toLogIn = (username)=>{
//     return dispatch => {
//         new Promise((resolve,reject)=>{
// 			console.log("to login");
// 			setTimeout(()=>{
// 				resolve({
//                     type:LOG_IN.type,
//                     username:username
// 				})
// 			},1000)
// 		}).then(res=>{
// 			dispatch(res)
// 		})
//     }
// }

const toLogInAction = (userData)=>{
    return dispatch => {
        return LoginApi.getUserData()
		.then(data=>{
			dispatch(getUserDataSuccess(data));
		}).catch(err=>{
			throw(err);
		})
    }
}

const getUserDataSuccess = (userData)=>{
	return {
		type:types.LOG_IN,
		userData
	}
}

const toLogOutAction = ()=>{
    return dispatch => {
        new Promise((resolve,reject)=>{
			console.log("to logout");
			setTimeout(()=>{
				resolve({
                    type:types.LOG_OUT
				})
			},1000)
		}).then(res=>{
			dispatch(res)
		})
    }
}

export {toLogInAction,toLogOutAction};