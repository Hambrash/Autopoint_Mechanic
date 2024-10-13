import React, { useState } from 'react';
import { Navigation } from './Navigation';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Container from 'react-bootstrap/esm/Container';

export const Bookings = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    carModel: '',
  });

  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: formData.name,
      to_email: formData.email,
      car_model: formData.carModel,
      from_name: 'Autopoint Services',
      subject: `Booking Confirmation for ${formData.carModel}`,
      reply_to: formData.email, // User's email will be used in Reply-To field
    };

    emailjs.send('service_g3vcg3b', 'template_xijla1z', templateParams, 'bbNnSPqS2Vt7Oo_UE')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Booking confirmation sent successfully!');
        // Navigate to Thank You page after sending the email
        navigate('/Thank');
      })
      .catch((error) => {
        console.log('FAILED...', error);
        alert('There was an error sending the email.');
      });
  };

  return (
    <>
      <Navigation />
      <div className="booking-content">
        <br /><br /><br /><br />
        <h2 className='text-center service-h2'>BOOK <span>YOUR</span> SERVICES</h2>
        <Container>
          <Row>
            <Col lg={4} md={4} sm={0}></Col>
            <Col lg={4} md={4} sm={12}>
              <br /><br />
              <Form onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCarName">
                  <Form.Label>Car Model Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Eg: Innova, Swift etc.."
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <div className="text-center">
                  <Button variant="primary" type="submit">
                    Book my Appointment
                  </Button>
                </div>
              </Form>
            </Col>
            <Col lg={4} md={4} sm={0}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
