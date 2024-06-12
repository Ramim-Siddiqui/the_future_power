import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faHome, faBuilding, faUsers } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Faqs.css'
const FAQS = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Container>
        <Row className="my-5">
          <Col>
            <h1 className="text-center motto-text">Future Power: Solar Energy FAQs</h1>
            <p className="text-center motto-subtext">Find answers to common questions about solar energy, our services, and how we can help you harness the power of the sun.</p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <h2 className='motto-text'><FontAwesomeIcon icon={faQuestionCircle} /> General FAQs</h2>
            <Accordion defaultActiveKey="0"className='motto-subtexts'>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is solar energy?</Accordion.Header>
                <Accordion.Body>
                  Solar energy is the radiant energy emitted by the sun. Solar panels convert this sunlight into electricity through a process called the photovoltaic effect.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Is solar power right for me?</Accordion.Header>
                <Accordion.Body>
                  Solar power can be a great option for many people, but there are some factors to consider. These include your roof size and suitability, your average energy usage, and your budget. Future Power offers free consultations to help you determine if solar is right for you.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>How much does solar power cost?</Accordion.Header>
                <Accordion.Body>
                The cost of a solar power system depends on several factors, such as the size of the system you need, the type of equipment used, and your location. However, Future Power offers competitive pricing models and flexible financing options to make solar power affordable for everyone.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>How much will I save on my electricity bill?</Accordion.Header>
                <Accordion.Body>
                The amount you save on your electricity bill with solar power depends on your current energy usage and the size of your solar system. However, you can expect to see significant savings over time, especially with rising energy costs.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>What is the lifespan of a solar panel system?</Accordion.Header>
                <Accordion.Body>
                High-quality solar panels typically have a lifespan of 25 years or more, with minimal maintenance required. Future Power uses only the most reliable and durable solar panels on the market.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Does solar power work in cloudy/rainy weather?</Accordion.Header>
                <Accordion.Body>
                Solar panels still generate electricity on cloudy or rainy days, although the amount of electricity produced will be less. However, solar power systems are designed to capture sunlight throughout the year, even in less-than-ideal weather conditions.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>How does net metering work?</Accordion.Header>
                <Accordion.Body>
                (If applicable in your service area) Net metering allows you to sell excess electricity generated by your solar panels back to the utility company. This can significantly reduce your electricity bill or even create a credit that can be applied towards future bills.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>What are the environmental benefits of solar power?</Accordion.Header>
                <Accordion.Body>
                  Solar power is a clean and renewable energy source. By using solar power, you help reduce reliance on fossil fuels and contribute to a smaller carbon footprint.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>Is solar power safe?</Accordion.Header>
                <Accordion.Body>
                Solar panels are safe and do not emit any harmful emissions or noise pollution. They operate at a low voltage and are rigorously tested for safety.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>What happens if my solar panels need maintenance?</Accordion.Header>
                <Accordion.Body>
                Solar panels require minimal maintenance. The Future Power offers maintenance plans to ensure your system continues to operate at peak efficiency.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <h2 className='motto-text'><FontAwesomeIcon icon={faHome} /> Homeowners</h2>
            <Accordion className='motto-subtexts'>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Will solar panels damage my roof?</Accordion.Header>
                <Accordion.Body>
                  Solar panels are installed using a secure mounting system that is designed to prevent damage to your roof. Future Power only uses certified installers who follow strict safety protocols.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Will solar panels affect the aesthetics of my home?</Accordion.Header>
                <Accordion.Body>
                  Solar panels can actually enhance the curb appeal of your home. They come in a variety of styles and sizes to complement your home's architecture.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Will solar panels increase the value of my home?</Accordion.Header>
                <Accordion.Body>
                  Studies have shown that homes with solar panels can sell for a higher price than comparable homes without solar.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <h2 className='motto-text'><FontAwesomeIcon icon={faBuilding} /> Businesses</h2>
            <Accordion className='motto-subtexts'>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What are the tax benefits of solar power for businesses?</Accordion.Header>
                <Accordion.Body>
                  There are several federal and state tax incentives available for businesses that install solar power systems. Future Power can help you navigate the available tax credits and deductions.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>How can solar power help my business save money?</Accordion.Header>
                <Accordion.Body>
                  Solar power can significantly reduce your operating costs by lowering your electricity bills. This can improve your bottom line and increase your return on investment (ROI).
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Can solar power meet all of my business's energy needs?</Accordion.Header>
                <Accordion.Body>
                The size of your solar system can be customized to meet a significant portion of your business's energy needs.  Future Power will conduct a thorough energy audit to determine the optimal system size for your business.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <h2 className='motto-text'><FontAwesomeIcon icon={faUsers} /> Communities</h2>
            <Accordion className='motto-subtexts'>
              <Accordion.Item eventKey="0">
                <Accordion.Header>How can solar power benefit schools and non-profit organizations?</Accordion.Header>
                <Accordion.Body>
                  Schools and non-profits can save money on electricity bills with solar power, freeing up resources for other important programs. Additionally, solar power can demonstrate a commitment to sustainability and environmental responsibility.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Can solar power be used in community centers or public buildings?</Accordion.Header>
                <Accordion.Body>
                  Absolutely! Community centers and public buildings can benefit significantly from solar power, reducing energy costs and promoting a clean energy future for the community.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>How can Future Power help my community go solar?</Accordion.Header>
                <Accordion.Body>
                Future Power partners with communities to develop and implement solar power solutions. We can work with local governments, businesses, and residents to bring the benefits of solar energy to everyone.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>How can I learn more about solar power for my community?</Accordion.Header>
                <Accordion.Body>
                Contact Future Power today
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FAQS;
