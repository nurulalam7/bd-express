import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';




import Homeshowdata from './Homeshowdata/Homeshowdata';

const Home = () => {
    const [services,setservice]=useState([]);
    useEffect(()=>{
       fetch('https://evening-brook-25408.herokuapp.com/services')
       .then(res=>res.json())
       .then(data=>setservice(data));
    },[])
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
           <h3 className="headername">our service </h3>
           <div className="container">
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 1}).map((_, idx) => (

                                
                                    services.map(service => <Homeshowdata
                                    key={service.id}
                                    service={service}
                                    ></Homeshowdata>)
                                
            
                    ))}
                </Row>

               
            </div>
        </div>
    )
}

export default Home




