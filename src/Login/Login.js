import React, { } from 'react'




import './Login.css'
import UseAuth from './../Context/UseAuth';



const Login = () => {

    const {signinusinggoogle}=UseAuth();
    


    return (
        
           <div className="log">
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2>please login</h2>
            <button className="btn btn-success" onClick={signinusinggoogle}>Google sign in</button> :  
            
           </div>
            
        
    )
}

export default Login
