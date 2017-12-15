import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './store/store';  

import {
    BrowserRouter,
    HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

  import Login from './login';
  import Home from './component/home';

  //declare route
 const route = (
     //use Router instead of HashRouter
    <Provider store = {store}>
        <Router history={Router}>
            <Route path='/' component={Login}/> 
            <Route path='home' component={Home}/>                   
        </Router>
    </Provider>
 ) 

ReactDOM.render(
    route,
    document.getElementById('root')
);
registerServiceWorker();
