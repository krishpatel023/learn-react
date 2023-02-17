import React from 'react';
import { Link } from 'react-router-dom';

function About(){
    return<>
        <h1>About Page</h1>
        <Link to='/user/krish'>Krish</Link>
        <br />
        <Link to='/user/kashvi'>Kashvi</Link>

    </>
}
export default About;