import React, { Component } from 'react';   
import { connect } from 'react-redux'; 
import { toUserDetailAction } from '../../action/toUserDetailAction';
import history from '../../component/public/history';
import Header from '../../component/header/header';
import {
    Router,
    HashRouter,
    Route,
    Switch
  } from 'react-router'

  import { Link,NavLink } from 'react-router-dom'


  import Home from '../home/home';
  import UserDetail from '../userDetail/userDetail';

import './Layout.css';
  
//定义组件  
class Layout extends Component{
    constructor(props){
        super(props);
        this.state = {
            //.....
            username:'',
            userPic:'',
            pagetitle:''
        };
    }

   componentWillMount(){
       console.log(this.props);
       if(this.props.loginState.userData){
           this.setState({
                username : this.props.loginState.userData.username,
                userPic: this.props.loginState.userData.userPic,
           })
       }
   }

    render() {  
        return (
            <div>
                <Header />
                <Route exact path="/Home" component={Home} />
                <Route path="/Home/UserDetail" component={UserDetail} />
            </div>
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
Layout = connect(mapStateToProps)(Layout)
  
//导出组件
export default Layout;