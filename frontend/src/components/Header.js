import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import welcomeaudio from '../assets/audio/welcome.wav';
import '../css/Header.css';

const Header = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  useEffect(() => {
    const audioPlayer = document.getElementById('audioPlayer');

    const tryPlayAudio = () => {
      audioPlayer.play().then(() => {
        console.log('Audio playback started');
        document.removeEventListener('mousemove', handleUserInteraction);
        document.removeEventListener('click', handleUserInteraction);
      }).catch((error) => {
        setTimeout(tryPlayAudio, 1000);
      });
    };

    const handleUserInteraction = () => {
      tryPlayAudio();
    };

    document.addEventListener('mousemove', handleUserInteraction);
    document.addEventListener('click', handleUserInteraction);

    return () => {
      audioPlayer.pause();
      document.removeEventListener('mousemove', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white" style={{ overflowX: 'hidden' }}>
      <audio id="audioPlayer" preload="auto">
        <source src={welcomeaudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src="https://www.tfp.com.pk/img/logo.svg" alt='Logo' className="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" className={`nav-link ${hoveredLink === 'home' ? 'hovered' : ''}`} onMouseEnter={() => handleMouseEnter('home')} onMouseLeave={handleMouseLeave}>Home</Nav.Link>
            <Nav.Link as={Link} to="/products" className={`nav-link ${hoveredLink === 'about' ? 'hovered' : ''}`} onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>Products</Nav.Link>
            <Nav.Link as={Link} to="/skills" className={`nav-link ${hoveredLink === 'skills' ? 'hovered' : ''}`} onMouseEnter={() => handleMouseEnter('skills')} onMouseLeave={handleMouseLeave}>Solutions</Nav.Link>
            <Nav.Link as={Link} to="/faqs" className={`nav-link ${hoveredLink === 'project' ? 'hovered' : ''}`} onMouseEnter={() => handleMouseEnter('project')} onMouseLeave={handleMouseLeave}>FAQS</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={`nav-link ${hoveredLink === 'contact' ? 'hovered' : ''}`} onMouseEnter={() => handleMouseEnter('contact')} onMouseLeave={handleMouseLeave}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
