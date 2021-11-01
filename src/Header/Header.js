import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

import './Header.css'
import { Link } from 'react-router-dom';
import UseAuth from './../Context/UseAuth';


const Header = () => {
    const {user,logout}=UseAuth();
    return (


        <>
        <Navbar bg="dark" variant="dark" fixed="top">
                 <Container>
                  <Navbar.Brand className="fw-bolder"> <h1>BD EXPRESS</h1>  </Navbar.Brand>
                  <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                         <Link className="head" to="/home">Home</Link>
                         
                         <Link className="head" to="/dashboard">dash board</Link>
                        
                         {/* <Link className="head" to="/manageorder">manage all orders</Link> */}
                         
                         
                         
                        
                         
                         
                         {
                             user?.email ?   
                            
                            <> 
                                 <Link className="head" to="/blog">manage all order</Link>
                                 <Link className="head" to="/myorder">my orders</Link>
                                 <button className="btn btn-warning mx-2" onClick={logout}>logout</button>
                                 <a className="mx-2 text-decoration-none" href="#login">{user.displayName}</a>

                                
                            </> :  <Link className="head" to="/login">log in</Link> 
                         }
                            
                        
                        
                         {
                             user.email && <img className="userimage" src={user.photoURL} alt="" />
                         }
                         
                         {/* <Navbar.Text>
                          
                              <a className="text-decoration-none fw-bold" href="#login">{user.displayName}</a>
                         </Navbar.Text>
                         
                        {user?.email && <button className="btn btn-success mx-2" onClick={logout}>log out</button>}
                        {
                            user.email && <img  src={user.photoURL} className="useriamge" alt="" />
                        } */}
                        
                                                         
                         
                     </Navbar.Collapse>
                 
                 
                 </Container>
        </Navbar>
        </>
      
        
        
    )
}

export default Header



