import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import '../About/About.css'
import my1 from '../About/ceo/ceo1.jpg' 

import my2 from '../About/ceo/ceo2.jpg'
import my3 from '../About/ceo/ceo3.jpg'



const About = () => {
    return (
        <div className="aboutinfo">
           
            <h2>about us</h2>
           <CardGroup>
  <Card>
    <Card.Img variant="top" src={my1} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is founer of this industry . a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src={my2} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        he is co ceo of this coompany. This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src={my3} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
       he is ceo of this industry. below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
   
  </Card>
</CardGroup>
        </div>
    )
}

export default About
