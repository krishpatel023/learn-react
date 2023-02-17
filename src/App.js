import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Page404 from './components/Page404';


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
        
        {
        /* 
        This takes us to the 404 page. It does not redirect us.

        /* means any url name that does not match the above
        <Route path="/*" element={<Page404/>} /> */
        }
        {/* This redirects any wrong URL to the home page only. */}
        <Route path="/*" element={<Navigate to="/home" />} />
        
        


      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;