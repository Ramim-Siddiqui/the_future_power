import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios'; // Ensure Axios is imported
import "../css/Contact.css";
import image from '../assets/images/contact.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    problem: ''
  });

  const backgroundStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
    position: 'relative',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/submit-form', formData); 
      alert('Form submitted successfully');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        problem: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form');
    }
  };

  return (
    <Container fluid style={backgroundStyle}>
      <Row className="justify-content-center text-center">
        <Col>
          <span className='contact-heading'>Contact Us</span>
        </Col>
      </Row>
      <Row className="justify-content-right m-4">
        <Col xs={12} sm={12} md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className='form-group'>
              <span>Name *</span>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                className="mr-sm-2"
                onChange={handleChange}
                style={{fontSize:"2vh"}}
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className='form-group'>
              <span>Email *</span>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email"
                className="mr-sm-2"
                onChange={handleChange}
                style={{fontSize:"2vh"}}
              />
            </Form.Group>
            <Form.Group controlId="formMobile" className='form-group'>
                <span>Mobile Number *</span>
                <Form.Control
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  placeholder="Enter your mobile number"
                  className="mr-sm-2"
                  onChange={handleChange}
                  style={{fontSize:"2vh"}}
                />
            </Form.Group>
            <Form.Group controlId="formProblem" style={{ color: 'white', fontFamily: 'Poppins', display: 'inline-block',width:"60vw",fontSize:"3vh",fontWeight:"bolder"}}>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                name="problem"
                value={formData.problem}
                placeholder="Write your message *"
                onChange={handleChange}
                style={{fontSize:"2vh"}}
              />
            </Form.Group>
            <br></br>
            <Button  variant="primary" type="submit" className='submit-button'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
