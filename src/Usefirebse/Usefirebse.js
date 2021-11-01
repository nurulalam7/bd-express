import React, { useEffect } from 'react'
import { useState } from 'react'

import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";

import initializeAuthentication from './../Firebase/firebase.init';
// import { useHistory, useLocation } from 'react-router';
initializeAuthentication();
const Usefirebse = () => {
    const[user,setuser]=useState({});
    const [error,seterror]=useState('');
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    // for redirect after login 
    // const history=useHistory()
    // const location=useLocation()
    // const url=location.state ?from ||'/home'


    const signinusinggoogle=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            console.log(result.user);
            setuser(result.user)
            // rerirect 
            // history.push(url)
        })
        .catch(error=>{
            seterror(error.message)
        })
    };

    const logout= ()=>{
        signOut(auth)
        .then(()=>{
            setuser({});
        })
    };


    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if (user){
               
                setuser(user);

            }
        })
    },[])
    return{
        logout,
        user,
        error,
        signinusinggoogle
    }
}

export default Usefirebse
