import React, {useState} from 'react';

function Login(){
    const[username,setUser]= useState("")
    const[password,setPass]= useState("")
    const[userErr,setUserError]=useState(false)
    const[passErr,setPassError]=useState(false)
    function formData(e){
        e.preventDefault();
        console.log(username,password)
        if(username==="" || password===""){
            alert("TYPE ANY VALUE")
        }
    }
    function userVal(e){
        const userN = e
        if(userN.length<6){
            setUserError("Username is Short")
        }
        else{
            setUserError(false)
            setUser(userN)
        }
    }
    function passVal(e){
        const pass = e

        if(pass === "krish"){
            
            setPass(e)
            setPassError("Welcome User")
        }
        else{
            setPassError("Password is Incorrect")
        }
        
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={(e)=>formData(e)}>
                <input type="text" placeholder='UserID' onChange={(e)=>userVal(e.target.value)}/>
                <br />
                <input type="password" placeholder="Password" onChange={(e)=>passVal(e.target.value)}/>
                <br />
                <span>{userErr}</span>
                <br />
                <span>{passErr}</span>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;