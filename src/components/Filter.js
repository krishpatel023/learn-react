import { useSearchParams } from "react-router-dom";
import React from 'react';

function Filter(){
    const [searchParams,setSearchParams] = useSearchParams()
    return(
        <div>
            <h1>Filter Component</h1>
            <h2>Age : {searchParams.get('age')}</h2>
            <h2>City : {searchParams.get('city')}</h2>
            <button onClick={()=>setSearchParams({age:40,city:'Delhi'})}>Click</button>

        </div>
    )
}

export default Filter;