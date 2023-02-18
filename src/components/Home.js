import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate =useNavigate();
    const navToPage = ()=>{
        navigate('/about')
    }
    return<>
        <h1>Home Page</h1>
        <br />
        <button onClick={()=>navigate('/about')}>Go To About Page</button>
        <br />
        <button onClick={()=>navigate('/filter')}>Go To Filter Page</button>
        <br />
        <button onClick={navToPage}>Using Function go to about</button>
    </>
}
export default Home;