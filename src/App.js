import './App.css';
import React, {Component} from 'react';
import Child from './Child'

class App extends Component{
  constructor(){
      super();
      console.log("constructor")
      this.state={
        show:false
      }
  }

  render(){
      console.log("render")
      return(
          <div className='App'>
              <h1>Learn React</h1>
              {console.log("Parent")}
              {this.state.show ? <Child/> : <h1>Parent Component</h1>}
              <button onClick={()=>{this.setState({show:!this.state.show})}}>TOGGLE</button>       
          </div>
      )
  }
}

export default App;