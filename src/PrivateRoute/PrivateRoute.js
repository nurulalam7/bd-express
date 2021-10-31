import React from 'react'
import { Route,Redirect } from 'react-router-dom';
import UseAuth from '../Context/UseAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user} =UseAuth();
    return (
        <div>
            <Route
         {...rest}
         render={({location}) => user.email ?
         children : 
         <Redirect
             to={{
                 pathname:'/login',
                 state :{from :location}
             }}
         ></Redirect>}
        >
           

        </Route>
            
        </div>
    )
}

export default PrivateRoute





