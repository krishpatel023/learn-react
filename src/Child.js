import React, { useEffect } from "react";

function Child(props){

    //Can be used with props as well.
    useEffect(()=>{
        console.log("CHILD---",props.count)
    },[props.count,props.data])

    return(
        <div>
            <h1>Child Component</h1>
            <h2>Count: {props.count}</h2>
            <h2>Data : {props.data}</h2>
        </div>
    )
}

export default Child;