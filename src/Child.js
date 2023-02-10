import React, {Component} from "react";

class Child extends Component{
    constructor(){
        super();
        this.state={
            email:"krish@gmail.com"
        }
    }
    render(){
        return(
            <div style={{background:"lightblue"}}>
                <h1>Child Component</h1>
                <h2>{this.props.name}</h2>
                <h2>Email:{this.state.email}</h2>
                <button onClick={()=>this.setState({email:"patel@gmail.com"})}>Change Email</button>
            </div>
        )
    }
}
export default Child;