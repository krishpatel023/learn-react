import './App.css';
import React, {Component } from 'react';

class App extends Component{

  constructor(){
    super();
    this.state={
      data:0
    }
  }
  updateData(){
    this.setState({data:this.state.data+1})
  }  
  render(){
    return(
    <div className="App">
        <h1>Learn React</h1>
        <h2>Click Count</h2>
        <h2>{this.state.data}</h2>
        <button onClick={()=>this.updateData()}>Click Here</button>
    </div>      
    )
  }
}

export default App;
