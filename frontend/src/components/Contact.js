import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "../css/Contact.css"
import image from '../assets/images/contact.jpg'

const Contact = () => {
  const backgroundStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
    position: 'relative',
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
          <Form>
            <Form.Group controlId="formName" className='form-group'>
              <span>Name *</span>
              <Form.Control type="text" placeholder="Enter your name" className="mr-sm-2" style={{fontSize:"2vh"}}/>
            </Form.Group>
            <Form.Group controlId="formEmail" className='form-group'>
              <span>Email *</span>
              <Form.Control type="email" placeholder="Enter your email" className="mr-sm-2" style={{fontSize:"2vh"}}/>
            </Form.Group>
            <Form.Group controlId="formMobile" className='form-group'>
                <span>Mobile Number *</span>
                <Form.Control type="text" placeholder="Enter your mobile number" className="mr-sm-2" style={{fontSize:"2vh"}}/>
            </Form.Group>
            <Form.Group controlId="formProblem" style={{ color: 'white', fontFamily: 'Poppins', display: 'inline-block',width:"60vw",fontSize:"3vh",fontWeight:"bolder"}}>
              <Form.Label>Describe Your Problem</Form.Label>
              <Form.Control as="textarea" rows={10} placeholder="Write about your problem" style={{fontSize:"2vh"}} />
            </Form.Group>
            <br></br>
            <Button  variant="primary"  type="submit" className='submit-button'>
            Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;