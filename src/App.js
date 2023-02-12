import { Component, createRef } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.inputRef = createRef();
  }
  componentDidMount(){
    console.log(this.inputRef)
    //From here we manipulated DOM and the value will be 1000
    console.log(this.inputRef.current.value="1000")
  }
  render(){
    return(
      <div className='App'>
        <h1>Learn React</h1>
        <input type="text" ref={this.inputRef} />
      </div>
    )
  }
}

export default App;