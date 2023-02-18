import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function User(){
    const params = useParams();
    const { name } = params;

    //Use Location
    const location = useLocation();
    console.log(location);
    return(
        <div>
            <h1>User Page</h1>
            <h2>{name}'s Page</h2>            
        </div>

    )
}
export default User;