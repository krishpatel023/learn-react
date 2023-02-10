import './App.css';
import React, {Component} from 'react';

class App extends Component{
  constructor(){
      super();
      console.log("constructor")
      this.state={
        count:0
      }
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate")
    //Need to write true by default if false it won't update the state
    return true;
  }
  render(){
      console.log("render")
      return(
          <div className='App'>
              <h1>Learn React</h1>
              <h2>{this.state.count}</h2>
              <button onClick={()=>{this.setState({count:this.state.count+1})}}>INCREASE COUNT</button>       
          </div>
      )
  }
}

export default App;