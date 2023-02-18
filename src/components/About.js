import React from 'react';
import { Link } from 'react-router-dom';

function About(){

    return<>
        <h1>About Page</h1>
        {/* It is sending data through the state so that useLocation can recieve it. */}
        <Link to='/user/krish' state={{name:'Krish',age:20,gender:"Male"}}>Krish</Link>
        <br />
        <Link to='/user/kashvi' state={{name:'Kashvi',age:20,gender:"Female"}}>Kashvi</Link>
        <br />
        <br />
        <br />
        <h2>Fire Filter Query</h2>
        <br />
        <Link to='/filter?age=10&city=Ahd'>Filter Query</Link>

    </>
}
export default About;