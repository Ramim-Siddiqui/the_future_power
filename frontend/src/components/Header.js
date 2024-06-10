import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import welcomeaudio from '../assets/audio/welcome.wav';
import '../css/Header.css';

const Header = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
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
    <Navbar expanded={expanded} onToggle={setExpanded} collapseOnSelect expand="lg" className="bg-white" style={{ overflowX: 'hidden' }}>
      <audio id="audioPlayer" preload="auto">
        <source src={welcomeaudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Container fluid>
        <Navbar.Brand>
          <Link to="/" onClick={handleNavLinkClick}>
            <img src="https://www.tfp.com.pk/img/logo.svg" alt='Logo' className="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" className={`nav-link ${hoveredLink === 'home' ? 'hovered' : ''}`} onMouseEnter={() => handleMouseEnter('home')} onMouseLeave={handleMouseLeave} onClick={handleNavLinkClick}>Home</Nav.Link>
            <Nav.Link as={Link} to="/products" className={`nav-link ${hoveredLink === 'products' ? 'hovered' : ''}`} onMouseEnter={() => handleMouseEnter('products')} onMouseLeave={handleMouseLeave} onClick={handleNavLinkClick}>Products</Nav.Link>
            <Nav.Link as={Link} to="/solutions" className={`nav-link ${hoveredLink === 'solutions' ? 'hovered' : ''}`} onMouseEnter={() => handleMouseEnter('solutions')} onMouseLeave={handleMouseLeave} onClick={handleNavLinkClick}>Solutions</Nav.Link>
            <Nav.Link as={Link} to="/faqs" className={`nav-link ${hoveredLink === 'faqs' ? 'hovered' : ''}`} onMouseEnter={() => handleMouseEnter('faqs')} onMouseLeave={handleMouseLeave} onClick={handleNavLinkClick}>FAQS</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={`nav-link ${hoveredLink === 'contact' ? 'hovered' : ''}`} onMouseEnter={() => handleMouseEnter('contact')} onMouseLeave={handleMouseLeave} onClick={handleNavLinkClick}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
