import './App.css';
import React,{useState, useEffect} from 'react';
import Child from './Child'


// Here useState is a hook.

function App(){
  const[data,setData]=useState(10)
  const[count,setCount]=useState(0)  
  
  //Normal UseEffect without parameter/condition
  //This will run for every state
  useEffect(()=>{
    console.log("useEffect")
  }
  )
  //useEffect with condition
  //Here onclicking data this will not run.
  //This only runs for count state
  useEffect(()=>{
    console.log("useEffect---Count")
  },[count]
  )

  return(
    <div className='App'>
      <h1>Learn React</h1>
      <h2>Count : {count}</h2>
      <h2>Data : {data}</h2>
      <Child count={count} data={data} />
      <button onClick={()=>setCount(count + 1)}>Count</button>
      <br />
      <button onClick={()=>setData(data + 1)}>Data</button>
    </div>
  )
}

export default App;