import React, { Component } from 'react';  
import ReactDOM from 'react-dom';
import styled from 'styled-components';   
import { connect } from 'react-redux'; 

import { buttonClickAction,changeTextAction } from './action/action';
import {toLogIn,LOG_OUT} from './action/loginAction';
import { logState } from './reducer/loginReducer';
import { rootReducer } from './reducer/reducer';

import './login.css';
  
  
//定义组件  
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            isUser:Boolean,
            loginState:0
        };
        this.userValidate = this.userValidate.bind(this);
        this.toLogin = this.toLogin.bind(this);
    }

    toLogin(){
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
        // const { dispatch } = this.props
        // dispatch(toLogIn())
        this.props.dispatch(toLogIn);
    }

    //until user information has complete to post
    // according to the post request to decide next step
    async userValidate(){
        let userRes = await this.toLogin();
        const { dispatch } = this.props;
        if(userRes.status==="ok")this.state.isUser = true;
        if(this.state.isUser)
        console.log(`isUser is :${this.state.isUser}`); 
    }
    
    render() {  
        const {text, onChangeText, onButtonClick} = this.props;

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
            // <div>  
            //     <h1 onClick={onChangeText}> {text} </h1>  
            //     <button onClick={onButtonClick}>click me</button>  
            // </div>
            <Form>
                <Input type="text" name="username" ref="username" placeholder="username"/>
                <Input type="password" name="password" ref="password" placeholder="password" />
                <Submit onClick = {this.props.onLogIn} >登陆</Submit> 
            </Form>  
        );  
    }  
}  

//映射Redux state到组件的属性  
function mapStateToProps(state) {  
    return { loginState: state.loginState }  
}  
  
//映射Redux actions到组件的属性  
function mapDispatchToProps(dispatch){  
    return{  
        onLogIn:()=>{
            dispatch(rootReducer(toLogIn));
            console.log(this.props);
        // onLogOut:()=>dispatch(LOG_OUT.type) 
        } 
    }  
}  
  
//连接组件  
Login = connect(mapStateToProps, mapDispatchToProps)(Login)  

//导出组件
export default Login;
