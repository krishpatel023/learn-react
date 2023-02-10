import React,{Component} from "react";

class Child extends Component{
    //When this exits then the component is unmounted.
    componentWillUnmount(){
        console.log("Unmounted")
    }
    render(){
        return(
            <div>
                <h1>Child Component</h1>
            </div>
        )
    }
}
export default Child;