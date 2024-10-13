import React from 'react'
import { Navigation } from './Navigation'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import backgroundImage from '../assets/backgroundimage.jpg'
import { useNavigate } from 'react-router-dom';


export const Home = () => {

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleExploreServices = () => {
    navigate('/Services'); // Navigate to the Services component
  };


  return (
    <>
        <div style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        height: '100vh',
        width: '100vw'
      }}>
            <Navigation/>
            <div className="content">
                <Container>
                    <Row>
                        <Col lg={6}></Col>
                        <Col lg={6} className='text-center '>
                        <br /><br /><br /><br /><br />
                          <div className="home-content">
                            <h1 className='home-h1'>LOOKING FOR CAR SERVICE?</h1>
                            <p className='home-p '>Get a free quote and let the professionals do all work</p>
                            <Button variant="outline-danger" onClick={handleExploreServices}>Explore Services</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>

    
    
    
    </>
  )
}
