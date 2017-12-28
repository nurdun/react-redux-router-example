// import { actions } from '../action/action';

// const intialState = {
//     actions:actions.TO_SUBMIT
// }

// const initialState = {  
//     text: 'Hello'  
// }  
// export const reducer = (state = initialState, action) => {  
//     switch (action.type) {  
//         case 'CHANGE_TEXT':  
//             return {  
//                 text: state.text=='Hello' ? 'world':'Hello'  
//             }  
//         case 'BUTTON_CLICK':  
//             return {  
//                 text: 'Hello world'  
//             }  
//         default:  
//             return initialState;  
//     }  
// } 
import { combineReducers } from 'redux';
import { setLogState } from './loginReducer';

export const rootReducer = combineReducers({
    setLogState
})
