import {Link, NavLink} from 'react-router-dom';
import React from 'react';
import './css/NavBar.css'

function NavBar(){
    return(
        <div className='header'>
            <ul className='navbar'>
            {/* We can't apply class to link so we use NavLink. */}
                <li><NavLink className='nav-bar-link' to='/home'>Home</NavLink></li>
                <li><NavLink className='nav-bar-link' to='/about'>About</NavLink></li>
                <li><NavLink className='nav-bar-link' to='/user'>User</NavLink></li>
            </ul>

        </div>
    )
}

export default NavBar;