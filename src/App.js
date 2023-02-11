import { Component } from 'react';
import './App.css';
import Child from './Child'

class App extends Component{
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  render(){
    console.log("Check Re-Rendering -- COMPONENT",this.state.count)
    return(
      <div className='App'>
        <h1>Learn React</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Count</button>
        <Child/>

      </div>
    )
  }
}

export default App;