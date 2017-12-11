import React, { Component } from 'react';  
import ReactDOM from 'react-dom';   
import { connect } from 'react-redux'; 
import { buttonClickAction,changeTextAction } from './action/action'; 
  
  
//定义组件  
class App extends Component{  
    render() {  
        const {text, onChangeText, onButtonClick} = this.props;  
        return (  
            <div>  
                <h1 onClick={onChangeText}> {text} </h1>  
                <button onClick={onButtonClick}>click me</button>  
            </div>  
        );  
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
App = connect(mapStateToProps, mapDispatchToProps)(App)  

//导出组件
export default App;
