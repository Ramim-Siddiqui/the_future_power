import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../css/Products.css";
import { Container, Row, Col, Image } from 'react-bootstrap';
import image1 from "../assets/images/products.jpg";
import image2 from "../assets/images/panels.jpg";
import image3 from "../assets/images/inverters.jpg";
import image4 from "../assets/images/energy.jpg";
import image5 from "../assets/images/other.jpg";
import video from '../assets/video/vid4.mp4';
import { useNavigate } from 'react-router-dom';

const Products = () => {
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
    <div className="product-container">
          <Container fluid className="home-container d-flex w-100 vh-80 justify-content-left align-items-center">
                <video autoPlay loop muted className="video-background">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="content" data-aos="fade-up">
                    <Row>
                        <Col sm={12} md={8} lg={8} style={{ fontSize: '8vh' }}>
                            <p>Explore our wide range of solar products and build the perfect system for your needs..</p>
                        </Col>
                        <Col sm={12} md={8} lg={8}>
                            <button onClick={navigateToContact} className='contact-button'>Contact Us</button>
                        </Col>
                    </Row>
                </div>
            </Container>
      <Container fluid className='home-container bg-white d-flex flex-column w-100 vh-80 justify-content-center align-items-center'>
        <Row>
          <Col sm={12} md={12} className="text-center">
             <h1 className="about-heading" data-aos="fade-down">COMPANIES</h1>
          </Col>
          <Col sm={12} md={6} className="d-flex justify-content-center align-items-center" data-aos="fade-right">
            <Image src={image1} fluid alt="Products Image" className="large-image"/>
          </Col>
          <Col sm={12} md={6} className="d-flex flex-column justify-content-center align-items-center text-center" data-aos="fade-left">
            <div className="motto-container">
              <p className='motto'>Experience the difference quality products make. Contact Future Power today for a free consultation and learn more about our solar solutions featuring leading brands like LONGI SOLAR, SUNGROW, and HUAWEI.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className='bg-white justify-content-center align-items-center'>
      <Row>
          <Col sm={12} md={12}>
            <h2 className="section-heading" data-aos="fade-up">Solar Panel Manufacturers</h2>
            <ul className="product-list" data-aos="fade-up">
              <li className='company-name'>LONGI SOLAR:</li>
              <li>A world leader in monocrystalline silicon photovoltaic products, known for their high-efficiency and durable solar panels.</li>
              <li className='company-name'>JA SOLAR:</li>
              <li>A global leader in solar cell and module manufacturing, offering high-performance solar panels for residential, commercial, and utility-scale projects.</li>
              <li className='company-name'>CANADIAN SOLAR:</li>
              <li>A leading manufacturer of high-quality solar modules, known for their commitment to sustainability and innovation.</li>
              <li className='company-name'>JINKO SOLAR:</li>
              <li>A global manufacturer of solar modules and cells, offering a wide range of products for various applications.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12}>
            <h2 className="section-heading" data-aos="fade-up">Solar Inverter Manufacturers</h2>
            <ul className="product-list" data-aos="fade-up">
              <li className='company-name'>SUNGROW:</li>
              <li>A leading manufacturer of solar inverters and energy storage solutions, known for their reliable and efficient products.</li>
              <li className='company-name'>SMA:</li>
              <li>A global leader in solar inverter technology, offering a wide range of inverters for residential, commercial, and utility-scale projects.</li>
              <li className='company-name'>FRONIUS:</li>
              <li>A manufacturer of high-quality solar inverters, known for their innovative technology and user-friendly design.</li>
              <li className='company-name'>INVEREX:</li>
              <li>A manufacturer of solar inverters and energy storage solutions, offering a variety of products for different needs.</li>
              <li className='company-name'>SOLIS:</li>
              <li>A leading manufacturer of string inverters for residential and commercial solar applications, known for their affordability and reliability.</li>
              <li className='company-name'>GROWATT:</li>
              <li>A manufacturer of solar inverters and energy storage solutions, offering a wide range of products for various applications.</li>
              <li className='company-name'>GOODWE:</li>
              <li>A manufacturer of solar inverters and energy storage solutions, known for their high efficiency and smart grid capabilities.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12}>
            <h2 className="section-heading" data-aos="fade-up">Other Companies</h2>
            <ul className="product-list" data-aos="fade-up">
              <li className='company-name'>HUAWEI:</li>
              <li>A global technology leader offering a variety of products for the solar industry, including inverters and smart energy management systems.</li>
              <li className='company-name'>ABB:</li>
              <li>A leading manufacturer of industrial automation and power technologies, offering solutions for the solar industry.</li>
              <li className='company-name'>PYLONTECH:</li>
              <li>A manufacturer of lithium-ion battery storage solutions for residential and commercial applications.</li>
              <li className='company-name'>SCHNEIDER ELECTRIC:</li>
              <li>A global leader in energy management and automation solutions, offering products for the solar industry.</li>
              <li className='company-name'>TERASAKI:</li>
              <li>A manufacturer of printed circuit board (PCB) fabrication equipment, a crucial component in solar panel production.</li>
              <li className='company-name'>PHOENIX CONTACT:</li>
              <li>A manufacturer of industrial electrical connection and automation technology, offering solutions for the solar industry.</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container fluid className='home-container bg-white d-flex flex-column w-100 vh-80 justify-content-center align-items-center'>
        <Row>
          <Col sm={12} md={12} className="text-center">
             <h1 className="about-heading" data-aos="fade-down">PRODUCTS</h1>
          </Col>
          <Col sm={12} md={6} className="d-flex justify-content-center align-items-center" data-aos="fade-right">
            <Image src={image2} fluid alt="Products Image" className="large-image"/>
          </Col>
          <Col sm={12} md={6} className="d-flex flex-column justify-content-center align-items-center text-center" data-aos="fade-left">
            <div className="motto-container">
              <p className='m-text'>Solar Panels</p>
              <p className='motto'>Solar panels are the core component of a solar energy system, converting sunlight into electricity through the photovoltaic effect. They come in various sizes and capacities to suit different needs.</p>
              <h1 className='mission'>Typical Products</h1>
              <p className='text'>Monocrystalline silicon solar panels (known for high efficiency and durability).</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className='home-container bg-white d-flex flex-column w-100 vh-80 justify-content-center align-items-center'>
        <Row>
          <Col sm={12} md={6} className="d-flex justify-content-center align-items-center" data-aos="fade-right">
            <Image src={image3} fluid alt="Products Image" className="large-image"/>
          </Col>
          <Col sm={12} md={6} className="d-flex flex-column justify-content-center align-items-center text-center" data-aos="fade-left">
            <div className="motto-container">
              <p className='m-text'>Inverters</p>
              <p className='motto'>Solar inverters convert the direct current (DC) electricity produced by solar panels into usable alternating current (AC) electricity for your home or business.</p>
              <h1 className='mission'>Typical Products</h1>
              <p className='text'>String inverters (common for residential and small commercial applications)</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className='home-container bg-white d-flex flex-column w-100 vh-80 justify-content-center align-items-center'>
        <Row>
          <Col sm={12} md={6} className="d-flex justify-content-center align-items-center" data-aos="fade-right">
            <Image src={image4} fluid alt="Products Image" className="large-image"/>
          </Col>
          <Col sm={12} md={6} className="d-flex flex-column justify-content-center align-items-center text-center" data-aos="fade-left">
            <div className="motto-container">
              <p className='m-text'>Solar Energy Storage</p>
              <p className='motto'>Solar energy storage systems allow you to store excess solar energy generated during the day for use at night or during peak energy demand times. This can help you maximize your solar energy use and reduce reliance on the grid.</p>
              <h1 className='mission'>Typical Products</h1>
              <p className='text'>Lithium-ion battery storage solutions (popular for residential and commercial applications)</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className='home-container bg-white d-flex flex-column w-100 vh-80 justify-content-center align-items-center'>
        <Row>
          <Col sm={12} md={6} className="d-flex justify-content-center align-items-center" data-aos="fade-right">
            <Image src={image5} fluid alt="Products Image" className="large-image"/>
          </Col>
          <Col sm={12} md={6} className="d-flex flex-column justify-content-center align-items-center text-center" data-aos="fade-left">
            <div className="motto-container">
              <p className='m-text'>Additional Products</p>
              <h1 className='mission'>Monitoring Systems</h1>
              <p className='text'>These systems track your solar energy production and consumption in real-time, allowing you to optimize your system performance.</p>
              <h1 className='mission'>Mounting Systems</h1>
              <p className='text'>These secure solar panels to your roof and ensure they are properly angled for maximum sun exposure.</p>
              <h1 className='mission'>Balance of System (BOS) Components</h1>
              <p className='text'>This includes various electrical components and wiring needed to connect all the parts of your solar energy system.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Products;
