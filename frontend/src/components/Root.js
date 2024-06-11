import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../css/Root.css';
import video from '../assets/video/vid3.mp4'
const Root = () => {
  return (
    <div style={{overflow:"hidden"}}>
      <Container fluid className="root-container d-flex w-100 vh-100 justify-content-center align-items-center">
      <video autoPlay loop muted className="video-background">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <p className="welcome-text">
            <span>Welcome</span>{' '}
            <span>To</span>{' '}
            <span>The</span>{' '}
            <span>Future</span>{' '}
            <span>Power!</span>
          </p>
          <p className="second-paragraph">
            Power your life with clean, renewable energy at The Future Power.
          </p>
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default Root;