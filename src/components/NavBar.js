import {Link} from 'react-router-dom';
import React from 'react';

function NavBar(){
    return(
        <div>
            <Link to='/home'>Home</Link>
            <br />
            <Link to='/about'>About</Link>
            <br />
            <Link to='/user'>User</Link>
        </div>
    )
}

export default NavBar;