import './App.css';
import React, {useState} from 'react';

function App(){
  const[status,setStatus]=useState(true)
  function changeStatus(){
    status?
    setStatus(false)
    :setStatus(true)
  }
  
  return(
    <div className="App">

      <button onClick={()=>changeStatus()}>Toggle</button>
      {status? <h1>Learn React</h1> : null}
    </div>
  )
}

export default App;