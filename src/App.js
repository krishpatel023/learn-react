import './App.css';
import React, {useState} from 'react';

function App(){
  const[name,setName]=useState("")
  const[movie,setMovie]=useState("")
  const[accepted,setAccepted]=useState(false)

  function getFormData(e){
    console.log(name,movie,accepted)
    e.preventDefault()
  }
  return(
    <div className="App">
      <h1>Learn Forms</h1>
      <form onSubmit={getFormData}>
        <input type="text" placeholder="Full Name" onChange={(e)=>setName(e.target.value)}/> <br /><br />
        <select onChange={(e)=>setMovie(e.target.value)}>
          <option value="">Select Options</option>
          <option value="Marvel">Marvel</option>
          <option value="DC">DC</option>
        </select>
        <br /><br />
        <input type="checkbox" name="accept" onChange={(e)=>setAccepted(e.target.checked)} />
        <label htmlFor="accept">ACCEPT</label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <h1>{name} {movie} {accepted}</h1>
    </div>
  )
}

export default App;