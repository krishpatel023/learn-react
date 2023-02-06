import React from 'react';

function Child(props){
    return(
        <div>
            <h1>In Child Component</h1>
            <button onClick={()=>props.data()}>Call Function</button>
        </div>
    )
}
export default Child;