import { useRef } from 'react';
import './App.css';

function App(){
  let inputRef1 = useRef(null)
  function handleSubmit(e){
    e.preventDefault()
    console.log(inputRef1.current.value)
    //Both ways are true as main purpose is that input should not be handled by state.
    let input2 = document.getElementById('input2').value
    console.log(input2)
  }
  return(
    <div className='App'>
      <h1>Learn React</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
      <input type="text" ref={inputRef1}/>
      <br />

      <input id="input2" type="text"/>
      <br />
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App;