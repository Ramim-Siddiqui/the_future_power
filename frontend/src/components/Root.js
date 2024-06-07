import React from 'react';
import image from '../assets/images/bg3.jpg';
import { Col, Row } from 'react-bootstrap';
import '../css/Root.css';

const Root = () => {
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
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center root-container" style={backgroundStyle}>
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
    </div>
  );
};

export default Root;