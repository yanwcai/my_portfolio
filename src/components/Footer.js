import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer-container'>

      <div className="contact-section">
        <h3>CONTACT</h3>
        <p>Burnaby, B.C.</p>
        <p>stellar798@gmail.com</p>
      </div>

      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            
            <Link to='https://github.com/yanwcai' target="_blank" rel="noopener noreferrer" className="link-item"> 
              <FontAwesomeIcon icon={faGithub} size="1.5x" color="black"/>
            </Link>

            <Link to='www.linkedin.com/in/yanwen-cai' target="_blank" rel="noopener noreferrer" className="link-item">
              <FontAwesomeIcon icon={faLinkedin} size="1.5x" color="black"/>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <p className='website-rights'>© Yanwen Cai </p>
      </div>


    </div>
  );
}

export default Footer;
