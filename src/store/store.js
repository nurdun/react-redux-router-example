import { createStore,applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import { rootReducer } from '../reducer/reducer';

//store 
const middlewares = [thunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore); 
// export let store = createStore(reducer);
// export let logStore = createStore(logState);

const configureStore = (initialState)=>{
    debugger
    return createStoreWithMiddleware(rootReducer,initialState);
}
export const store = configureStore();
