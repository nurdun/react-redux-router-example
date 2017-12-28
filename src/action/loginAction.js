//login actions

// const LOG_IN = {
//     type:'LOG_IN'
// }
import { LOG_IN,LOG_OUT } from '../actionTypes/loginTypes';
 
const toLogIn = ()=>{
    return dispatch => {
        //  fetch('test.json')
        // .then(res=>res.json())
        // .then(res=>{
        //     if(res.status=='ok'){
        //          dispatch(LOG_IN);
        //         // return {
        //         //     type:LOG_IN.type
        //         // }
        //     }
        //     // dispatch(LOG_IN.type);
        //     // return {
        //     //     type:LOG_IN.type
        //     // }
        // })
        // .catch(err=>{
        //      dispatch(LOG_IN);
        //     // return {
        //     //     type:LOG_IN.type
        //     // }
        // })
        // dispatch(LOG_IN);
        new Promise((resolve,reject)=>{
			console.log("ok")
			setTimeout(()=>{
				// setTimeStore('userInfo',{
				// 	username:obj.username
				// })
				resolve({
					type:LOG_IN.type
				})
			},1000)
		}).then(res=>{
			dispatch(res)
		})
    }
}
// const LOG_OUT = {
//     type:'LOG_OUT'
// }

export {toLogIn,LOG_OUT};