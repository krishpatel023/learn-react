import { PureComponent } from "react";

class Child extends PureComponent{
    constructor(){
      super();
      this.state={
        flag:0
      }
    }
    render(){
      console.log("Check Re-Rendering -- PURECOMPONENT",this.state.flag)
      return(
        <div className='App'>
          <h1>Child Component</h1>
          <h2>Flag: {this.state.flag}</h2>
          <button onClick={()=>this.setState({flag:this.state.flag})}>Count</button>
  
        </div>
      )
    }
  }
export default Child;