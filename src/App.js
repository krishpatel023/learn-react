import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';

import './App.css';

function App(){

  return(
    <div className='App'>
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<h1>App.JS</h1>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />

      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;