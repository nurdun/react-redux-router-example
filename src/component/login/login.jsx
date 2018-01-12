import React, { Component } from 'react';  
import ReactDOM from 'react-dom';
import styled from 'styled-components';   
import { connect } from 'react-redux';

import { toLogIn } from '../../action/loginAction';
import { rootReducer } from '../../reducer/reducer';
import history from '../public/history';

import './login.css';
  
//定义组件  
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
        };
        this.userValidate = this.userValidate.bind(this);
        this.toLogin = this.toLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount(){
        console.log(this.props);
        this.rootRoute(this.props.loginState.loginState);
    }

    /*== according to loginState props to change router ==*/

    rootRoute(loginstate){
        loginstate !== 1?history.push('/'):history.push('/Home');
    }

    //until user information has complete to post
    // according to the post request to decide next step

    /*== dispach LOG_IN action type ==*/

    toLogin(){
        return new Promise((resolve,reject)=>{
             const { dispatch } = this.props                  
             dispatch(toLogIn(this.state.username))
             console.log(this.refs.username.value);
             setTimeout(()=>{
                 resolve(); 
             },1100);     
        })
     }
    
    /*========user input validate ========*/
    
    async userValidate(){
        if(this.state.username !== ''){
            await this.toLogin();
            this.rootRoute(this.props.loginState.loginState);
        }else{
            alert("请输入用户名！");
        }
    }
    /*====== Input Change =======*/
    
    handleChange(event) {
        this.setState({
            username: event.target.value
        });
    }
    
    render() {
        return (  
            <div className="Form">
                <input className="Input" type="text" name="username" ref="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
                <input className="Input" type="password" name="password" ref="password" placeholder="password" />
                <button className="Submit" onClick = {this.userValidate} >登陆</button> 
            </div>  
        );  
    }  
}  

// 映射Redux state到组件的属性  
function mapStateToProps(state) {  
    return { loginState: state.setLogState }  
}  
  
//映射Redux actions到组件的属性  
// function mapDispatchToProps(dispatch){  
//     return{  
//         onLogIn:()=>{
//             dispatch(rootReducer(toLogIn)); 
//         } 
//     }  
// }  
  
//连接组件  
// Login = connect(mapStateToProps, mapDispatchToProps)(Login) 
Login = connect(mapStateToProps)(Login); 

//导出组件
export default Login;
