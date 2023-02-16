import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import About from './About';

import './App.css';

function App(){

  return(
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />

      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;