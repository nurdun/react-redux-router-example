import { createStore } from 'redux'; 
import { reducer } from '../reducer/reducer'


//store  
export let store = createStore(reducer);  