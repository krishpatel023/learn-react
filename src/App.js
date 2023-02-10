import './App.css';
import React, {Component} from 'react';
import Child from './Child'

class App extends Component{
  constructor(){
      super();
      console.log("constructor")
      this.state={
        name:"KRISH",
        count:0
      }
  }
  componentDidUpdate(preProps,preState,snapshot){
    console.log("componentDidUpdate")
    //It will print previous state.
    //See in console. It will always show preState.
    console.log("PRE-STATE",preState)
    console.log("CURRENT-STATE",this.state)
    //snapshot
    //It will always be undefined here.
    //If your component implements getSnapshotBeforeUpdate()
    // lifecycle than only its value will be seen.
    console.log(snapshot)
  }
  render(){
      console.log("render")
      return(
          <div className='App'>
              <h1>Learn React</h1>
              <Child name={this.state.name}/>
              <button onClick={()=>{this.setState({name:"PATEL"})}}>CLICK</button>   
              <br />
              <button onClick={()=>{this.setState({count:this.state.count+1})}}>INCREASE COUNT</button>       
          </div>
      )
  }
}

export default App;