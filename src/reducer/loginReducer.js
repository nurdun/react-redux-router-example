import { LOG_IN,LOG_OUT} from '../actionTypes/loginTypes';

const initialState = {  
    loginState:0
}
export const setLogState = (state = initialState,action)=>{
    switch(action.type){
        case 'LOG_IN':
            return {
                loginState: 1
            }
        case 'LOG_OUT':
            return {
                loginState: -1
            }
        default:
            return initialState;
    }
}