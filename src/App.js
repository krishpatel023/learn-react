import './App.css';
import React, { Component } from 'react';

class App extends Component{
  
  constructor(){
    super();
    this.state={
      data:"Krish"
    }
  }
  render(){
    return(
      <div className='App'>
        <h1>Learn React</h1>
        <h2>{this.state.data}</h2>
      </div>
    )
  }
}

export default App;