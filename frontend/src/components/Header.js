import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import welcomeaudio from '../assets/audio/welcome.wav';

const style = {
  textDecoration: "none",
  fontFamily: "Poppins",
  background: `white`,
  WebkitBackgroundClip: 'text',
  color: 'black',
  fontSize: "3vh"
};

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
    let playAttempts = 0;
    const maxPlayAttempts = 5;

    const tryPlayAudio = () => {
      audioPlayer.play().then(() => {
        console.log('Audio playback started');
        document.removeEventListener('mousemove', handleUserInteraction);
      }).catch((error) => {
        playAttempts += 1;
        if (playAttempts < maxPlayAttempts) {
          setTimeout(tryPlayAudio, 1000); 
        } else {
          console.error('Audio playback failed:', error);
        }
      });
    };

    const handleUserInteraction = () => {
      tryPlayAudio();
    };

    document.addEventListener('mousemove', handleUserInteraction, { once: true });

    return () => {
      audioPlayer.pause();
      document.removeEventListener('mousemove', handleUserInteraction);
    };
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white">
      <audio id="audioPlayer" preload="auto">
        <source src={welcomeaudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src="https://www.tfp.com.pk/img/logo.svg" alt='Logo' style={{ width: "20vh", marginRight: "20px", marginLeft: "20px" }} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link
                to="/home"
                style={{
                  ...style,
                  color: hoveredLink === 'home' ? 'blue' : 'black',
                }}
                onMouseEnter={() => handleMouseEnter('home')}
                onMouseLeave={handleMouseLeave}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/products"
                style={{
                  ...style,
                  color: hoveredLink === 'about' ? 'blue' : 'black',
                }}
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                Products
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/skills"
                style={{
                  ...style,
                  color: hoveredLink === 'skills' ? 'blue' : 'black',
                }}
                onMouseEnter={() => handleMouseEnter('skills')}
                onMouseLeave={handleMouseLeave}
              >
                Solutions
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/faqs"
                style={{
                  ...style,
                  color: hoveredLink === 'project' ? 'blue' : 'black',
                }}
                onMouseEnter={() => handleMouseEnter('project')}
                onMouseLeave={handleMouseLeave}
              >
                FAQS
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/contact"
                style={{
                  ...style,
                  color: hoveredLink === 'contact' ? 'blue' : 'black',
                }}
                onMouseEnter={() => handleMouseEnter('contact')}
                onMouseLeave={handleMouseLeave}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
