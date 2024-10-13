import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'; 

export const Navigation = () => {
  return (
    <>
          <Navbar expand="lg" className="bg-body-tertiary navigation" fixed='top'>
              <Container>
                  <Navbar.Brand href="#home">AUTOPOINT</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ms-auto">
                          <Nav.Link as={Link} to='/'  className='nav'>Home</Nav.Link>
                          <Nav.Link as={Link} to='/Services' className='nav'>Services</Nav.Link>
                          <Button as={Link} to='/Bookings' variant="outline-dark">Book a Appointment</Button>
                          <NavDropdown title="Contact" id="basic-nav-dropdown">
                              <NavDropdown.Item href="#action/3.1">Autopoint@gmail.com</NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#action/3.2">
                                  999-999-9999
                              </NavDropdown.Item>
                              
                              
                          </NavDropdown>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
    
    
    </>
  )
}
