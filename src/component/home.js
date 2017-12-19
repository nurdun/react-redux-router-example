import React, { Component } from 'react';  
import ReactDOM from 'react-dom';
import styled from 'styled-components';   
import { connect } from 'react-redux'; 

import { buttonClickAction,changeTextAction } from '../action/action';
  
  
//定义组件  
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            isUser:Boolean
        };
        this.userValidate = this.userValidate.bind(this);
    }

    toLogin(){
        
        return fetch("test.json",{   
            method:"get"
        })
        .then(res=>res.json())
        .catch(err=>err)
    }

    //until user information has complete to post
    // according to the post request to decide next step
    async userValidate(){
        let userRes = await this.toLogin();
        if(userRes.status=="ok")this.state.isUser = true;
        if(this.state.isUser)
        console.log(`isUser is :${this.state.isUser}`); 
    }
    
    render() {  
        return (
            <div>
                welcome to homePage
            </div>
        )
    }  
}  

//映射Redux state到组件的属性  
function mapStateToProps(state) {  
    return { text: state.text }  
}  
  
//映射Redux actions到组件的属性  
function mapDispatchToProps(dispatch){  
    return{  
        onButtonClick:()=>dispatch(buttonClickAction),  
        onChangeText:()=>dispatch(changeTextAction)  
    }  
}  
  
//连接组件  
Home = connect(mapStateToProps, mapDispatchToProps)(Home)  

//导出组件
export default Home;
