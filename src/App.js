import './App.css';
import React, {Component } from 'react';

class App extends Component{
  constructor(){
      super();
      console.log("constructor")
      this.state={
        name:"KRISH"
      }
  }
  componentDidMount(){
    console.log("componentDidMount")
  }
  render(){
      console.log("render")
      return(
          <div className='App'>
              <h1>Learn React</h1>
              <button onClick={()=>{this.setState({name:"PATEL"})}}>CLICK</button>          
              
          </div>
      )
  }
}

export default App;