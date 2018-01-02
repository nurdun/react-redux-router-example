import React, { Component } from 'react';  
import ReactDOM from 'react-dom';
import styled from 'styled-components';   
import { connect } from 'react-redux'; 

import {toLogIn,LOG_OUT} from '../../action/loginAction';
import { logState } from '../../reducer/loginReducer';
import { rootReducer } from '../../reducer/reducer';

import './login.css';
  
  
//定义组件  
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            // isUser:Boolean,
            // loginState:0
        };
        // this.userValidate = this.userValidate.bind(this);
        this.toLogin = this.toLogin.bind(this);
    }
    componentWillMount(){
        console.log(this.props);
    }

    toLogin(){

        /*========this code  instead by async action ========*/
        /*===I advice you write this fetch code in async action===*/

        // return fetch("user.json",{
        //     method:"post",
        //     body:JSON.stringify(
        //         {
        //             username:this.refs.username.value,
        //             password:this.refs.password.value
        //         })
        // })
        // return fetch("test.json",{  
        //     method:"get"
        // })
        // .then(res=>res.json())
        // .catch(err=>err)
        // dispatch(
        //     logState({

        //     })
        // )
        localStorage.setItem("status","ok");
        const { dispatch } = this.props
        dispatch(toLogIn())
    }

    //until user information has complete to post
    // according to the post request to decide next step
    
    /*========this code  instead by async action ========*/

    // async userValidate(){
    //     let userRes = await this.toLogin();
    //     if(userRes.status==="ok")this.state.isUser = true;
    //     if(this.state.isUser)
    //     console.log(`isUser is :${this.state.isUser}`); 
    // }
    
    render() {  
        //use styled-components
        const Form = styled.div`
            margin:200px auto;
            width:300px;
            height:300px;
            box-sizing:border-box;
            padding:80px 20px 80px 20px;
            text-align:center;
            border-radius:5px;
            box-shadow: .1px .1px .5px .5px #ccc;
        `
        const Input = styled.input`
            width:95%;
            height:30px;
            margin-top:10px;
            padding-left:10px;
            border:0;
            border-radius:5px;
            box-shadow:.1px .1px .5px .5px #ccc; 
        ` 
        const Submit = styled.button`
            margin-top:20px;
            width:100%;
            height:30px;
            color:#fff;
            border:0;
            background:#0499fd;
        ` 
        return (  
            <Form>
                <Input type="text" name="username" ref="username" placeholder="username"/>
                <Input type="password" name="password" ref="password" placeholder="password" />
                <Submit onClick = {this.toLogin} >登陆</Submit> 
            </Form>  
        );  
    }  
}  

// 映射Redux state到组件的属性  
// function mapStateToProps(state) {  
//     return { loginState: state.setLogState }  
// }  
  
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
Login = connect()(Login); 

//导出组件
export default Login;
