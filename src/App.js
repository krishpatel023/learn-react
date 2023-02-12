import { useState } from 'react';
import './App.css';

function App(){
  const[val,setVal]=useState("")
  const[item,setItem]=useState("")
  return(
    <div className='App'>
      <h1>Learn React</h1>
      <h2>Value : {val}</h2>
      <input type="text" onChange={(event)=>setVal(event.target.value)} placeholder="Value"/>
      <br />
      <br />
      <h2>Item: {item}</h2>
      <input type="text" onChange={(event)=>setItem(event.target.value)} placeholder="Item"/>

    </div>
  )
}

export default App;