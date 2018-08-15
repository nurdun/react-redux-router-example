import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './store/store';

import {
    Router,
    HashRouter,
    Route,
    Link,
    Switch
  } from 'react-router'

import Login from './views/login/login';
import Layout from './views/Layout/Layout';

import history from './component/public/history';

  class App extends React.Component{
      constructor(props){
          super(props);
          this.state = {
            // loginState:0
          }
      }
      componentDidMount() {
          console.log(this.props);
          console.log(store);
      }

      render(){
        console.log(this.props);
          return (
              <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path='/Home' component={Layout} />
                    </Switch>
                </Router>
                <footer>
                    <h3>welcome to my react demo</h3>
                    <span className="author">@author by nurdun</span>
                </footer> 
                {this.props.children}   
              </div>
          )
      }
  }

export default ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')|| document.createElement('div')
);
registerServiceWorker();



