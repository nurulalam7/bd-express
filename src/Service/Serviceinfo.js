import React, { useEffect, useState } from 'react'

const Serviceinfo = () => {
    const [products,setproducts]=useState({});
    useEffect(()=>{
        fetch('https://evening-brook-25408.herokuapp.com/service/')
        .then(res=>res.json())
        .then(data=>setproducts(data));
    },[])
    return (
        <div>
            <h4>{products.length}</h4>
            
        </div>
    )
}

export default Serviceinfo
