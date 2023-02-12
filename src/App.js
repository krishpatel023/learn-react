import { useRef } from 'react';
import './App.css';

function App(){
  let inputRef = useRef(null)
  function handleRef(){
    console.log(inputRef.current.value="1000")
  }
  return(
    <div className='App'>
      <h1>Learn React</h1>
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={()=>handleRef()}>Click</button>
    </div>
  )
}

export default App;