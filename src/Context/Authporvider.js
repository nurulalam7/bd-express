import React, { createContext } from 'react'
import Usefirebse from './../Usefirebse/Usefirebse';
export  const AuthContext=createContext();
const Authporvider = ({children}) => {
    const allContext=Usefirebse();
    return (
        <AuthContext.Provider value={allContext}>
                 {children}
        </AuthContext.Provider>
    )
}

export default Authporvider
