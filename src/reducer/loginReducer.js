

const initialState = {  
    loginState:0
}
export const logState = (state = initialState,action)=>{
    debugger
    switch(action){
        case 'LOG_IN':
            return {
                loginState: state.loginState = 1
            }
        case 'LOG_OUT':
            return {
                loginState: state.loginState = -1
            }
        default:
            return initialState;
    }
    console.log(logState);
}