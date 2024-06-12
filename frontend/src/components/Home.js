import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import video from '../assets/video/vid1.mp4';
import '../css/Home.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/images/about.jpg';
const Home = () => {
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
                            <p>Future Power</p>
                        </Col>
                        <Col sm={12} md={8} lg={8} style={{ fontSize: '8vh' }}>
                            <p>Leading the way to a brighter solar future.</p>
                        </Col>
                        <Col sm={12} md={8} lg={8}>
                            <button onClick={navigateToContact} className='contact-button'>Contact Us</button>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container fluid className="home-container d-flex w-100 vh-80 bg-white d-flex flex-column justify-content-center align-items-center">
                <Row className="mb-4" data-aos="fade-up">
                    <Col sm={12} md={12}className="text-center">
                        <h1 className="about-heading">About Us</h1>
                    </Col>
                    <Col sm={12} md={12}>
                        <p className="mission-text">Future Power was founded in 2019 with a vision to empower everyone with clean, reliable solar energy. We are passionate about reducing our reliance on fossil fuels and creating a brighter future for generations to come.</p>
                        <p className="mission-text">Our team of certified solar professionals has extensive experience in designing and installing high-quality solar panel systems. We prioritize customer satisfaction by offering personalized consultations, top-notch installation services, and comprehensive warranties.</p>
                        <p className="mission-text">At Future Power, we believe that everyone deserves access to clean energy. We're committed to providing affordable solar solutions and staying at the forefront of sustainable practices.</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="bg-white vh-80 w-100 d-flex flex-column justify-content-center">
                <Row>
                    <Col sm={12} md={6} className="d-flex justify-content-center align-items-center" data-aos="fade-right">
                        <Image src={image1} fluid alt="About Us Image" />
                    </Col>
                    <Col sm={12} md={6} className="d-flex flex-column justify-content-center align-items-center text-center" data-aos="fade-left">
                        <div className="motto-container">
                            <p className="motto-text">Our Motto</p>
                            <p className="motto-subtext">Brightening Our World with Solar, Creating Sustainable Futures Together</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="bg-white vh-100 w-100 d-flex flex-column justify-content-center">
                <Row className="mb-4 text-center" data-aos="fade-up">
                    <Col>
                        <h1 className="mission-heading">Our Mission & Vision</h1>
                        <h1 className="mission-subheading">We're on a Mission to Revolutionize Energy with Simple, Powerful Solar Solutions</h1>
                        <p className="mission-text">At Future Power, we're on a mission to revolutionize energy with simple, powerful solar solutions. We believe clean, reliable energy is a right, not a privilege, and we're passionate about making solar accessible for everyone.</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="bg-white home-container d-flex flex-column w-100 vh-80 justify-content-left">
              <Row className="w-100">
                <Col sm={12} md={6} className="d-flex justify-content-center align-items-center mt-5" data-aos="fade-right">
                  <Image src="https://imageio.forbes.com/specials-images/imageserve/65446135295059f5785712fe/Solar-and-wind-power/960x0.jpg?height=474&width=711&fit=bounds" fluid alt="Our Values Image" className="large-image" /> {/* Added className */}
                </Col>
                <Col sm={12} md={6} className="d-flex flex-column justify-content-center align-items-center text-center" data-aos="fade-left">
                  <div className="motto-container">
                    <p className="motto-text">Our Values</p>
                    <p className="value-subtext">At Future Power, our core values guide everything we do. We are passionate about sustainability, driving the transition towards clean energy for a healthier planet. We believe in accessibility, making solar power a reality for homeowners, businesses, and communities alike.  Innovation is in our DNA, and we constantly strive to offer the most powerful and efficient solar solutions.  Customer focus is paramount, and we prioritize clear communication, exceptional service, and a smooth solar experience.  Finally, we believe in the power of community, partnering with organizations to expand solar's reach and build a brighter future together.</p>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container fluid className="bg-white home-container d-flex w-100 vh-80 justify-content-center">
                <Row className="mb-4 text-center" data-aos="fade-up">
                    <Col>
                        <h1 className="mission-subheading">Our Difference from Other Solar Power Companies</h1>
                        <p className="mission-text">At Future Power, we believe everyone deserves access to clean energy. That's why we go beyond just serving homeowners. We're passionate about:</p>
                        <h1 className="mission-heading">Empowering Communities</h1>
                        <p className="mission-text">We partner with businesses, schools, and organizations to bring solar power to a wider range of people, fostering a cleaner future for our communities.</p>
                        <h1 className="mission-heading">Making Solar Affordable</h1>
                        <p className="mission-text">We offer competitive pricing models and flexible financing options to make switching to solar a reality for any budget.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
