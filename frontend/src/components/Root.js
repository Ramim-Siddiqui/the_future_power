import image from '../assets/images/bg3.jpg';
import { Col, Row } from 'react-bootstrap'; 

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
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center" style={backgroundStyle}>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <p className="welcome-text">
            <span>Welcome</span>{' '}
            <span>To</span>{' '}
            <span>The</span>{' '}
            <span>Future</span>{' '}
            <span>Power!</span>
          </p>
          <p className="second-paragraph" style={{fontSize: '5vh',fontWeight: 'bold',fontFamily: 'Poppins',}}>
            Power your life with clean, renewable energy at The Future Power.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Root;

const cssStyles = `
  @keyframes particleEffect {
    0% {
      opacity: 0;
      transform: translateY(-50px) rotate(-30deg) scale(0.2);
    }
    100% {
      opacity: 1;
      transform: translateY(0) rotate(0deg) scale(1);
    }
  }

  .welcome-text {
    font-size: 10vh;
    font-weight: bold;
    font-family: Poppins;
    position: relative;
    transition: opacity 0.5s ease;
  }

  .welcome-text span {
    display: inline-block;
    opacity: 0; /* Initially set opacity to 0 */
    animation: particleEffect 1s ease forwards;
  }

  .welcome-text span:nth-child(1) {
    animation-delay: 0.5s;
  }

  .welcome-text span:nth-child(2) {
    animation-delay: 1s;
  }

  .welcome-text span:nth-child(3) {
    animation-delay: 1.5s;
  }

  .welcome-text span:nth-child(4) {
    animation-delay: 2s;
  }

  .welcome-text span:nth-child(5) {
    animation-delay: 2.5s;
  }

  .second-paragraph {
    opacity: 0;
    animation: fadeInFromBottom 1s ease forwards;
    animation-delay: 3s;
  }

  @keyframes fadeInFromBottom {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = cssStyles;
document.head.appendChild(styleElement);
