import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './store/store';  

ReactDOM.render(
    <Provider store = {store}>
        <Login />
    </Provider>,    
    document.getElementById('root'));
registerServiceWorker();
