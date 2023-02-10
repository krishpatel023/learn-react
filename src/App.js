import './App.css';
import React, {useState } from 'react';
import Child from './Child'

function App(){

  const [name,setName] = useState("Krish");
    return(
      <div className='App'>
        <h1>Learn React</h1>
        <Child name={name}/>
        <button onClick={()=>setName("Patel")}>Click Here</button>
      </div>
    )
}

export default App;