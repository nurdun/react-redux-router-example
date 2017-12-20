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


  class App extends React.Component{
      constructor(props){
          super(props);
          this.state = {
            loginState:0
          }
      }
      render(){
          let Content = this.state.loginState!==1?Login:Home;
          return (
              <div>
                  <Content />
                  <footer>
                    <h3>welcome to my react demo</h3>
                    <span className="author">@author by nurdun</span>
                  </footer> 
                  {this.props.children}   
              </div>
          )
      }
  }

  //declare route
 const route = (
     //use Router instead of HashRouter
    <Provider store = {store}>
        <Router history={Router}>
            <Route path='/' component={App}/> 
        </Router>
    </Provider>
 ) 

ReactDOM.render(
    route,
    document.getElementById('root')
);
registerServiceWorker();
