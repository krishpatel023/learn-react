import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import User from './components/User';
import Filter from './components/Filter';

import './App.css';
import Contact from './components/Contact';
import Channel from './components/Channel';
import Company from './components/Company';
import Other from './components/Other';

function App(){

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>App.JS</h1>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/filter' element={<Filter/>} />

          {/* Nested Routing */}
          <Route path='/contact/' element={<Contact/>} >
            <Route path='channel' element={<Channel/>} />
            <Route path='company' element={<Company/>} />          
            <Route path='other' element={<Other/>} />
          </Route>

          

          <Route path="/user/:name" element={<User />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;