import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <FontAwesomeIcon icon={faClock} className="me-2" />
                Mon - Sat : 10.00 AM - 07.00 PM
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faPhone} className='me-2' />
                +92 (336 3037828 or 308 3711786)
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                Mezanine # 1, 15th Comm Lane, Plot, 4-C Phase II Ext.Rd, Karachi, 75500
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">
            <p className="m-0">&copy; 2024 Future Power. All Rights Reserved.</p>
          </div>
          <div className="col-lg-4 col-md-12 d-flex justify-content-lg-end justify-content-md-center justify-content-center align-items-center">
            <a href="https://www.facebook.com/RamimAli2003" target="_blank" rel="noopener noreferrer" className="me-4 text-reset">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com/ramimali2003?igsh=MW16NGd6ZHkwcjJvcQ==" target="_blank" rel="noopener noreferrer" className="me-4 text-reset">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/ramim-siddiqui-910404235" target="_blank" rel="noopener noreferrer" className="text-reset">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
