import React, { useEffect } from 'react';
import { FaCheckCircle, FaHeart, FaBullseye } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import video from '../assets/video/vid2.mp4';
import '../css/Solution.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import image1 from "../assets/images/Solution.jpg"
import image2 from "../assets/images/Solution2.jpg"
import image3 from "../assets/images/Solution3.jpg"

const backgroundStyle = {
  backgroundImage: `url(${image3})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
  position: 'relative',
};

const Solutions = () => {
  const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 2000, 
            once: false, 
        });
    }, []);

    const navigateToContact = () => {
        navigate('/contact');
    };
  return (
    <div style={{overflow:"hidden"}}>
      <Container fluid className="home-container d-flex w-100 vh-80 justify-content-left align-items-center">
                <video autoPlay loop muted className="video-background">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="content" data-aos="fade-up">
                    <Row>
                        <Col sm={12} md={8} lg={8}>
                            <p>The future is bright</p>
                        </Col>
                        <Col sm={12} md={8} lg={8} style={{ fontSize: '8vh' }}>
                            <p>Join the clean energy revolution with solar panels.</p>
                        </Col>
                        <Col sm={12} md={8} lg={8}>
                            <button onClick={navigateToContact} className='contact-button'>Contact Us</button>
                        </Col>
                    </Row>
                </div>
        </Container>
        <Container fluid className="bg-white vh-80 w-100 d-flex flex-column justify-content-center">
                <Row>
                    <Col sm={12} md={6} className="d-flex justify-content-center align-items-center" data-aos="fade-right">
                        <Image src={image1} fluid alt="About Us Image" className='large-image'/>
                    </Col>
                    <Col sm={12} md={6} className="d-flex flex-column justify-content-center align-items-center text-center" data-aos="fade-left">
                        <div className="motto-container">
                            <p className="motto-text">Our Innovative Solutions in the Field of Solar Energy</p>
                            <p className="motto-subtext">At The Future Power, we're constantly pushing the boundaries of solar energy. We may not have invented a flying solar car (yet!), but we're passionate about developing innovative solutions that make solar power more accessible and efficient for everyone.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="bg-white vh-100 w-100 d-flex flex-column justify-content-center">
                <Row className="mb-4 text-center" data-aos="fade-up">
                    <Col>
                        <h1 className="mission-subheading">We're a passionate team working toward a better future for the planet.</h1>
                        <p className="mission-text">At The Future Power, we're a collaborative force for good. Our team of engineers, designers, and solar enthusiasts work together seamlessly, harnessing the sun's power to create a brighter future, one solar panel at a time.</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="bg-white vh-80 w-100 d-flex flex-column justify-content-center">
                <Row>
                    <Col sm={12} md={6} className="d-flex justify-content-center align-items-center" data-aos="fade-right">
                        <Image src={image2} fluid alt="About Us Image" className="large-image" />
                    </Col>
                    <Col sm={12} md={6} className="d-flex flex-column justify-content-center align-items-center text-left" data-aos="fade-left">
                        <div className="motto-container">
                            <p className="motto-text">Superior Solutions</p>
                            <p className="motto-subtext">By using our quality products you get a peace of mind knowing that the system will have longevity and reliability for many decades to come.</p>
                            <h1 className="mission-heading"><FaCheckCircle /> High product quality</h1>
                            <p className="mission-text">We guarantee high quality at all stages of solar panel production & installation of our solutions.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={backgroundStyle} className="bg-white home-container d-flex w-100 vh-1500 justify-content-left align-items-center">
              <div className="why-content" data-aos="fade-up">
              <Row>
                <Col sm={12} md={8} lg={8}>
                Why People Choose Our Solar Solutions
                </Col>
              </Row>
              <Row>
              <Col sm={12} md={6} lg={6} className="d-flex flex-column justify-content-center align-items-center text-left" data-aos="fade-right">
                <p className='why-subtext'>At The Future Power, we believe everyone deserves clean energy. Join a thriving community of homeowners, businesses, and organizations who've chosen a brighter future powered by the sun.</p>
                </Col>
                <Col sm={12} md={6} lg={6} className="d-flex flex-column justify-content-left align-items-left text-left" data-aos="fade-left">
                        <h1 className='why-heading'><FaHeart style={{ marginRight: '10px', color: 'white' }} />Our Value</h1>
                        <p className='why-text'>Our work is based on several values and principles that allow us to create proper solar systems.</p>
                        <h1 className='why-heading' style={{ paddingTop: "20px" }}><FaBullseye style={{ marginRight: '10px', color: 'white' }} />Our Mission</h1>
                        <p className='why-text'>We aim to change the world as the trusted partner creating efficient energy solutions for everyone.</p>
                    </Col>
              </Row>
              </div>
              
            </Container>
    </div>
  )
}

export default Solutions
