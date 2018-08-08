import React, { Component } from 'react';   
import { connect } from 'react-redux'; 
import Header from '../../component/header/header';
import history from '../../component/public/history';
import { toLogOutAction } from '../../action/loginAction';

import './userDetail.css';
  
//定义组件  
class UserDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            // ...
            username:'',
            sex:'',
            age:'',
            email:'',
            pagetitle:'User Detail'
        };
        this.logOut = this.logOut.bind(this);
    }

    componentWillMount(){
        debugger
        console.log(this.props);
        this.rootRoute(this.props.loginState.loginState);
        if(this.props.loginState.userDetail){
            this.setState({
                username : this.props.userDetail.userDetailData.username,
                sex : this.props.userDetail.userDetailData.sex,
                age : this.props.userDetail.userDetailData.age,
                email : this.props.userDetail.userDetailData.email
           })
        }
    }

/*== dispach LOG_OUT action type ==*/
   awaitLogOut(){
       let {dispatch} = this.props;
       return new Promise((resolve,reject)=>{
            dispatch(toLogOutAction());
            setTimeout(()=>{
                resolve();
            },1010)
       })    
   }

   exitUserDetail(){

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
           <div >
                <Header pagetitle = {this.state.pagetitle} />
                <div className="Content">
                    <h3>welcome to HOME page</h3>
                    <h4>User Name: {this.state.username}</h4>
                    <h4>Sex: {this.state.sex}</h4>
                    <h4>Age: {this.state.age}</h4>
                    <h4>Email: {this.state.email}</h4>
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
    return { loginState: state.setLogState ,userDetail: state.toUserDetailState}    
}   
  
//映射Redux actions到组件的属性  
// function mapDispatchToProps(dispatch){  
//     return{  
//        .....
//     }  
// }  
  
//连接组件  
// Home = connect(mapStateToProps, mapDispatchToProps)(Home);  
UserDetail = connect(mapStateToProps)(UserDetail)
  
//导出组件
export default UserDetail;
