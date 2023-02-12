import { useState, useMemo } from 'react';
import './App.css';

function App(){
  const[count,setCount]=useState(0)
  const[flag,setFlag]=useState(10)

  //With use memo the function will only run if count is updated.
  //As we can see in console that the function without useMemo runs even if we update flag.
  //The one with useMemo runs only if we update count.
  const multiCountMemo = useMemo(
    function multiCountIn(){
      console.log("With useMemo")
      return count*3;
    },[count]
  )
  function multiCount(){
    console.log("Without useMemo")
    return count*2;
  }
  return(
    <div className='App'>
      <h1>Learn React</h1>
      <h3>Count: {count}</h3>
      <button onClick={()=>setCount(count+1)}>Count</button>
      <br />
      <h3>Flag: {flag}</h3>
      <button onClick={()=>setFlag(flag*10)}>Flag</button>
      <br />
      <h2>{multiCount()}</h2>
      <h2>{multiCountMemo}</h2>
    </div>
  )
}

export default App;