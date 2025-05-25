import React from 'react';
import { FaFacebookF, FaYoutube, FaEnvelope } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <div className="footer-up">
        <p className="footer-alt">Feel free to come just as you are!</p>
      </div>
      <div className="footer-down">
        <ul className="footer-links">
          <li>Home</li>
          <li>Contact</li>
          <li>Privacy Terms</li>
        </ul>
        <ul className="footer-socials">
          <li>
            <FaFacebookF />
            {' '}
            Facebook
          </li>
          <li>
            <FaYoutube />
            {' '}
            YouTube
          </li>
          <li>
            <FaEnvelope />
            {' '}
            Gmail
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          &copy;
          {currentYear}
          {' '}
          @ TWRSEM. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
