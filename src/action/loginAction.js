//login actions

import { LOG_IN,LOG_OUT } from '../actionTypes/loginTypes';
 
const toLogIn = (username)=>{
    return dispatch => {
        new Promise((resolve,reject)=>{
			console.log("to login");
			setTimeout(()=>{
				resolve({
                    type:LOG_IN.type,
                    username:username
				})
			},1000)
		}).then(res=>{
			dispatch(res)
		})
    }
}

const toLogOut = ()=>{
    return dispatch => {
        new Promise((resolve,reject)=>{
			console.log("to logout");
			setTimeout(()=>{
				resolve({
                    type:LOG_OUT.type
				})
			},1000)
		}).then(res=>{
			dispatch(res)
		})
    }
}

export {toLogIn,toLogOut};