import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes(props){

    const Component = props.Component;
    const navigate = useNavigate();

    useEffect(()=>{
        let login = localStorage.getItem('login')
        if(!login){
            navigate('/login')
        }
    })
    return(
        <div>
            <Component />
        </div>
    )
}
export default ProtectedRoutes;