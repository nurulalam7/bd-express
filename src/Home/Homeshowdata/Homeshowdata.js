import React from 'react'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Homeshowdata = ({service}) => {
    const {_id,name,price,description,img}=service;
    return (
        <div>
            <Col>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Title>{price}</Card.Title>
                           
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Link className="btn btn-warning" to ={`/service/${service._id}`}> book </Link>
                            
                        </Card.Body>
                    </Card>
            </Col>












            {/* <div>
                <img src={img} alt="" />
                <h3>service name :{name}</h3>
                <h3>price:{price}</h3>
                <h5>{description}</h5>
               
                    <button className="btn btn-warning">book now</button>
              
            </div> */}
            
        </div>
    )
}

export default Homeshowdata
