import { createStore,applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import { rootReducer } from '../reducer/reducer';

//store 
const middlewares = [thunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore); 

const configureStore = (initialState)=>{
    return createStoreWithMiddleware(rootReducer,initialState);
}
export const store = configureStore();
