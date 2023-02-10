import './App.css';
import React,{useState} from 'react';

// Here useState is a hook.

function App(){
  const[data,setData]=useState('Krish')
  return(
    <div className='App'>
      <h1>Learn React</h1>
      <h2>{data}</h2>
      <button onClick={()=>setData("Patel")}>Click</button>
    </div>
  )
}

export default App;