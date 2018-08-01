import React, { Component } from 'react';   
import { connect } from 'react-redux'; 

import './header.css';
  
//定义组件  
class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            //.....
        };
    }

   componentWillMount(){
       console.log(this.props);
   }

    
    render() {  
        return (
            <header className="Header">
                <div className="Title">
                    <span>HOME</span>
                </div>
                <div className="User">
                    <div className="user-prof">
                        <img src="" alt="用户"/>
                    </div>
                    <div className="userName">
                        <span>{this.props.loginState.username}</span>
                    </div>
                    
                </div>
            </header>
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
Header = connect(mapStateToProps)(Header)
  
//导出组件
export default Header;