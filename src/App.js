import './App.css';
import React from 'react';
import Child from './Child';

function App(){
  //It is maily created for components that need to be used in many child components.
  //So try to make it in parent component and reuse it.
  function Data(){
    alert("In Parent Component")
  }
  return(
    <div className="App">
      <Child data={()=>Data()}/>
    </div>
  )
}

export default App;