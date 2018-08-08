import React, { Component } from 'react';   
import { connect } from 'react-redux'; 
import Header from '../component/header/header';
import Home from './home/home';
import UserDetail from './userDetail/userDetail';
import history from '../component/public/history';

import {
    Router,
    HashRouter,
    Route,
    Link,
    Switch
  } from 'react-router'

class Layout extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <div>
                <Switch loginState = {this.props.loginState}>
                    <Route path='/Home' component={Home} />
                    <Route path='/Home/UserDetail' component={UserDetail} />
                </Switch>
            </div>
        )
    }
}

function mapStateToProps(state) {  
    return { loginState: state.setLogState }  
} 

Layout = connect(mapStateToProps)(Layout)

export default Layout;
