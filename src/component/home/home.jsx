import React, { Component } from 'react';  
import ReactDOM from 'react-dom';
import styled from 'styled-components';   
import { connect } from 'react-redux';   
  
//定义组件  
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            // isUser:Boolean
        };
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
// function mapStateToProps(state) {  
//     return { text: state.text }  
// }  
  
//映射Redux actions到组件的属性  
// function mapDispatchToProps(dispatch){  
//     return{  
//         onButtonClick:()=>dispatch(buttonClickAction),  
//         onChangeText:()=>dispatch(changeTextAction)  
//     }  
// }  
  
//连接组件  
// Home = connect(mapStateToProps, mapDispatchToProps)(Home);  
Home = connect()(Home)
  
//导出组件
export default Home;
