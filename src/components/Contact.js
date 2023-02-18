import React from "react";
import {Link,Outlet} from 'react-router-dom';

function Contact(){
    return(
        <div>
            <h1>Contact Component</h1>

            <Link to='company'>Company</Link>
            <br />
            <Link to='channel'>Channel</Link>
            <br />
            <Link to='other'>Other</Link>
            <Outlet/>
        </div>
    )
}
export default Contact;