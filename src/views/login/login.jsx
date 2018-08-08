import React, { Component } from 'react';    
import { connect } from 'react-redux';

import { toLogInAction } from '../../action/loginAction';
import history from '../../component/public/history';

import './login.css';
  
//定义组件  
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'' 
        };
        this.userValidate = this.userValidate.bind(this);
        this.toLogin = this.toLogin.bind(this);
        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
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
             const userData = {
                 username:this.state.username,
                 password:this.state.password
             }                  
             dispatch(toLogInAction(userData))
             .then(res=>{
                resolve(); 
             })   
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
    
    usernameChange(event) {
        this.setState({
            username:event.target.value
        }) 
    }
    passwordChange(event) {
        this.setState({
            password:event.target.value
        })
    }
    
    render() {
        return (  
            <div className="Form">
                <input className="Input" type="text" name="username" ref="username" placeholder="username" value={this.state.username} onChange={this.usernameChange} />
                <input className="Input" type="password" name="password" ref="password" placeholder="password" value={this.state.password} onChange={this.passwordChange} />
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
// function mapDispatchToProps(dispatch,userData){  
//     return{  
//         getUserData:()=>{
//             dispatch(toLogInAction(userData)) 
//         } 
//     }  
// }  
  
//连接组件  
// Login = connect(mapStateToProps, mapDispatchToProps)(Login) 
Login = connect(mapStateToProps)(Login); 

//导出组件
export default Login;
