import React, { Component } from 'react';  
import ReactDOM from 'react-dom';
import styled from 'styled-components';   
import { connect } from 'react-redux'; 

import Header from '../header/header';

import { toLogOut } from '../../action/loginAction';
import history from '../public/history';

import './home.css';
  
//定义组件  
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            // ...
        };
        this.logOut = this.logOut.bind(this);
    }

    componentWillMount(){
        console.log(this.props);
        this.rootRoute(this.props.loginState.loginState);
    }

/*== dispach LOG_OUT action type ==*/
   awaitLogOut(){
       let {dispatch} = this.props;
       return new Promise((resolve,reject)=>{
            dispatch(toLogOut());
            setTimeout(()=>{
                resolve();
            },1010)
       })    
   }

/*== back to login page ==*/
   async logOut(){
       await this.awaitLogOut();
       this.rootRoute(this.props.loginState.loginState);
   }

 /*== according to loginState props to change router ==*/
 
   rootRoute(loginstate){
        loginstate !== 1?history.push('/'):history.push('/Home');
    }   
    
    render() {  
        return (
           <div>
                <Header />
                <div className="Content">
                    <h3>welcome to HOME page</h3>
                    <h4>your username is {this.props.loginState.username}</h4>
                    <div className="Logout">
                        <span>click here to logout</span>
                        <button onClick={this.logOut}>logout</button>
                    </div>
                    
                </div>
           </div>
        )
    }  
}  

//映射Redux state到组件的属性  
function mapStateToProps(state) {  
    return { loginState: state.setLogState }  
}   
  
//映射Redux actions到组件的属性  
// function mapDispatchToProps(dispatch){  
//     return{  
//        .....
//     }  
// }  
  
//连接组件  
// Home = connect(mapStateToProps, mapDispatchToProps)(Home);  
Home = connect(mapStateToProps)(Home)
  
//导出组件
export default Home;
