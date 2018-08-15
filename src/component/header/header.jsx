import React, { Component } from 'react';   
import { connect } from 'react-redux'; 
import { toLogInAction } from '../../action/loginAction';
import {toUserDetailAction} from '../../action/toUserDetailAction';
import history from '../public/history';

import './header.css';
  
//定义组件  
class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            //.....
            username:'',
            userPic:''
        };
        this.toUserDetail = this.toUserDetail.bind(this);
        this.toUserDetailSeccess = this.toUserDetailSeccess.bind(this);
        this.toHomePageSuccess = this.toHomePageSuccess.bind(this);
    }

   componentWillMount(){
       console.log(this.props);
       if(this.props.loginState.userData){
           this.setState({
                username : this.props.loginState.userData.username,
                userPic: this.props.loginState.userData.userPic,
                pagetitle:this.props.pagetitle
           })
       }
   }

   toUserDetail(){
        return new Promise((resolve,reject)=>{
            const { dispatch } = this.props                
            dispatch(toUserDetailAction())
            .then(res=>{
                resolve(); 
            })   
        })
   }

   toHomePage(){
        return new Promise((resolve,reject)=>{
            const { dispatch } = this.props                
            dispatch(toLogInAction())
             .then(res=>{
                resolve(); 
             })     
        })
   }

   async toUserDetailSeccess(){
    await this.toUserDetail();
     if(this.props.userDetail.pageState == 1) history.push('/Home/UserDetail');
   }
   async toHomePageSuccess(){
       await this.toHomePage();
       history.push('/Home');
   }
    
    render() {  
        return (
            <header className="Header">
                <div className="Title" onClick={this.toHomePageSuccess}>
                    <span>HOME</span>
                </div>
                <div className="User" onClick={this.toUserDetailSeccess}>
                    <div className="user-prof">
                        <img src={this.state.userPic} alt="用户"/>
                    </div>
                    <div className="userName">
                        <span>{this.state.username}</span>
                    </div>
                    
                </div>
            </header>
        )
    }  
}  

//映射Redux state到组件的属性  
function mapStateToProps(state) {  
    return { loginState: state.setLogState ,userDetail: state.toUserDetailState}  
}   
  
//映射Redux actions到组件的属性  
// function mapDispatchToProps(dispatch){  
//     return{  
//        .....
//     }  
// }  
  
//连接组件   
Header = connect(mapStateToProps)(Header)
  
//导出组件
export default Header;