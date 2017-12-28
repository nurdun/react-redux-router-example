import React, { Component } from 'react';   
import { connect } from 'react-redux';

import { toLogIn } from './action/loginAction';
import { rootReducer } from './reducer/reducer';

import Home  from './component/home';
import Login from './login';

import './login.css';
  
  
//定义组件  
class Routes extends Component{
    constructor(props){
        super(props);
        this.state = {
            //....
        };
    }
    componentWillMount(){
        console.log(this.props);
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.loginState);
    }
    
    render() {
        let loginstate = this.props.loginState.loginState;
        let Content = loginstate!==1?Login:Home;
        return(
             <Content />
        );    
    }  
}
function mapStateToProps(state) {  
    return { loginState: state.setLogState }  
}



//导出组件
export default Routes = connect(mapStateToProps)(Routes);
