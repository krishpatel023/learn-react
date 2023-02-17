import React from 'react';
import { useParams } from 'react-router-dom';

function User(){
    const params = useParams();
    const {name} = params;
    return(
        <div>
            <h1>User Page</h1>
            <h2>{name}'s Page</h2>            
        </div>

    )
}
export default User;