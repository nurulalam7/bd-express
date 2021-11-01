import React from 'react'
import { Card, Col } from 'react-bootstrap'

const Ordercard = ({ordered}) => {
   
    const {displayName,email,name,location,}=ordered;
    return (
        <div className="man">
            <Col>
                    <Card>
                        {/* <Card.Img variant="top" src={img} /> */}
                        <Card.Body>
                            <Card.Title>{displayName}</Card.Title>
                            <Card.Title>{email}</Card.Title>
                            <Card.Title>{name}</Card.Title>
                            <Card.Title>{location}</Card.Title>
                           
                            <Card.Text>
                                
                            </Card.Text>
                           
                            
                        </Card.Body>
                    </Card>
            </Col>

            
        </div>
    )
}

export default Ordercard


