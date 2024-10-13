import React from 'react'
import { Navigation } from './Navigation'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import BodyRepair from '../assets/bodyrepair.png'
import Maintenance from '../assets/maintenance.png'
import Carcare from '../assets/carecare.png'

export const Services = () => {
  return (
    <>

      <Navigation />
      <div className="background">
        <div className="content">

          <Container>
            <br /><br /><br />
            <h2 className='text-center text-white service-h2'>Our <span>Services</span></h2>
            <br />
            <p className="lead service-p text-center text-white">Our representatives are professionaly trained and skilled with latest and futursitic techniques to provide a best quality service.</p>
            <br /><br />
            <div className="service-cards">
              <Row className="justify-content-center">
                <Col lg={4} md={6} sm={12} className="mb-4">
                  <Card style={{ width: '18rem' }} className="mx-auto service-card">
                    <Card.Img variant="top" src={Maintenance} className='img-fluid service-img1' />
                    <Card.Body className='text-center'>
                      <Card.Title>Preventive Maintenance</Card.Title>
                      <Card.Text>Periodically check and keep your car running.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} md={6} sm={12} className="mb-4">
                  <Card style={{ width: '18rem' }} className="mx-auto service-card">
                    <Card.Img variant="top" src={BodyRepair} className='img-fluid service-img1' />
                    <Card.Body className='text-center'>
                      <Card.Title>Body Repair</Card.Title>
                      <Card.Text>Full chassis body repair provided by experts.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} md={6} sm={12} className="mb-4">
                  <Card style={{ width: '18rem' }} className="mx-auto service-card">
                    <Card.Img variant="top" src={Carcare} className='img-fluid service-img1' />
                    <Card.Body className='text-center'>
                      <Card.Title>Car Care</Card.Title>
                      <Card.Text>Keep your car in great condition.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>


          </Container>
        </div>

      </div>




    </>
  )
}
