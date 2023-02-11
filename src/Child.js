import React from "react";

function Child(props){
    return(
        <div>
            <h1>Child Component</h1>
            <h3>Name: {props.data.name}</h3>
        </div>
    )
}
export default Child;