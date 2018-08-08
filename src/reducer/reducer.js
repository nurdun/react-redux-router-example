
//combine reducers
import { combineReducers } from 'redux';
import { setLogState } from './loginReducer';
import { toUserDetailState } from './toUserDetailReducer';

export const rootReducer = combineReducers({
    setLogState,
    toUserDetailState
})
