import React, { useContext } from 'react'
import { AuthContext } from './Authporvider'

const UseAuth = () => {
    return useContext(AuthContext);
}

export default UseAuth
