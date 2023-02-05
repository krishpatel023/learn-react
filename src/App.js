import './App.css';
import React from 'react';
import Student from "./Student"

function App(){
  return (
    <div className="App">
      <h1>Learn React</h1>
      <Student name={"Krish"} email="krishpatel0234@gmail.com" multipleProps={{address:"India" , mobile:"0000"}} />
    </div>
  );
}

export default App;