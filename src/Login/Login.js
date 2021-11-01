import React, { } from 'react'




import './Login.css'
import UseAuth from './../Context/UseAuth';
import '../Login/Login.css'



const Login = () => {

    const {signinusinggoogle}=UseAuth();
    


    return (
        
           <div className="log">
           
            <h2>please login</h2>
            <button className="btn btn-success" onClick={signinusinggoogle}>Google sign in</button> :  
            
           </div>
            
        
    )
}

export default Login
