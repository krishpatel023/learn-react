import React from 'react';
import { Link } from 'react-router-dom';

function About(){

    return<>
        <h1>About Page</h1>
        <Link to='/user/krish'>Krish</Link>
        <br />
        <Link to='/user/kashvi'>Kashvi</Link>
        <br />
        <br />
        <br />
        <h2>Fire Filter Query</h2>
        <br />
        <Link to='/filter?age=10&city=Ahd'>Filter Query</Link>

    </>
}
export default About;