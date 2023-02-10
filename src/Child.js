import React, { Component } from "react";

class Child extends Component{
    componentDidUpdate(preProps){
        console.log("-------------------")
        console.log("PRE-PROPS",preProps)
        console.log("CURRENT-PROPS",this.props)
        console.log("-------------------")

    }
    render(){

        return(
            <div>
                <h1>Child Component</h1>
                <h2>Name:{this.props.name}</h2>
            </div>
        )
    }

}
export default Child;