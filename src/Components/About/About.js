import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import img1  from '../About/Im/images.1.jfif'
import img2  from '../About/Im/images.2.jfif'
import img3  from  '../About/Im/images.3.jfif'
{/* <About />
<Im />
<images className="3"></images>.jfif' */}


const About = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <h2>about us</h2>
           <CardGroup>
  <Card>
    <Card.Img variant="top" src={img1} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={img3} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={img2} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
        </div>
    )
}

export default About
