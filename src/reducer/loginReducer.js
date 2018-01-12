/*===== reducer =====*/

const initialState = {  
    loginState:0,
    username:null
}
export const setLogState = (state = initialState,action)=>{
    switch(action.type){
        case 'LOG_IN':
            return {
                loginState: 1,
                username:action.username
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