
//combine reducers
import { combineReducers } from 'redux';
import { setLogState } from './loginReducer';

export const rootReducer = combineReducers({
    setLogState
})
