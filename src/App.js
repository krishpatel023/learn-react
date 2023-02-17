import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import User from './components/User';

import './App.css';

function App(){

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>App.JS</h1>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* For Params --> name is taken here as params and then transfered to
          user.js with the help of params and displayed there. This names is recieved 
          from about page with link user/krish and user/kashvi  */}
          <Route path="/user/:name" element={<User />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;