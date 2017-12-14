import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './store/store';  

import {
    BrowserRouter,
    HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

  //declare route
 const route = (
     //use Router instead of HashRouter
    <Provider store = {store}>
        <Router history={Router}>
            <Route path='/' component={Login}/>          
        </Router>
    </Provider>
 ) 

ReactDOM.render(
    route,
    document.getElementById('root')
);
registerServiceWorker();
