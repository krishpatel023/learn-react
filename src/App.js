import './App.css';
import React, { useState } from 'react';


function App() {
  const [data,setData] = useState(0);
  function updateData(){
    return(
      setData(data+1)
    )
  }
  return (
    <div className="App">
        <h1>Learn React</h1>
        <h2>Click Count</h2>
        <h2>{data}</h2>
        <button onClick={()=>updateData()}>Click Here</button>
    </div>
  );
}

export default App;
