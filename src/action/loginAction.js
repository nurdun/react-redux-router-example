//login actions

// const LOG_IN = {
//     type:'LOG_IN'
// }
import { LOG_IN,LOG_OUT } from '../actionTypes/loginTypes';
 
const toLogIn = (userData)=>{
    return (dispatch)=>{
        return fetch('test.json')
        .then(res=>{
            dispatch({
                type:LOG_IN,
                user:res.json()
            })
            return res.json();
        })
    }
}
// const LOG_OUT = {
//     type:'LOG_OUT'
// }

export {toLogIn,LOG_OUT};