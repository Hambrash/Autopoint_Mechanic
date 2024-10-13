import React from 'react'
import { Navigation } from './Navigation'
import ThankYou from '../assets/thankyou.png'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

export const Thank = () => {
  return (
   <>
   <Navigation/>
<br />
   <Container className="thank-bg">
    <Row className='justify-content-center'>
        <Col lg={6} md={8} sm={12}>
            <div >
                <br /><br />
                <img src={ThankYou} alt=""  className='img-fluid thank-img' />
                <h1 className='text-center fs-5'>Your Booking has been Confirmed!!</h1>
                <p className='text-center fs-6'>We will get back to you soon with the details via email'phone.</p>
                <br />
                <p className="text-center fs-6">Cheers,<br />The AutoPoint Mechanic Team.</p><br /><br />

            </div>
        
        </Col>
    </Row>

   </Container>
   
   </>

  )
}
