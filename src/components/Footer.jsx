import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="tw-footer">
      <div className="footer-top">
        <h3>Tuinue Wasichana</h3>
        <p>Empowering African schoolgirls through education and opportunity.</p>
      </div>

      <div className="footer-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/programs">Programs</Link></li>
          <li><Link to="/charities">Charities</Link></li>
          <li><Link to="/stories">Stories</Link></li>
          <li><Link to="/donate">Donate</Link></li>
        </ul>
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tuinue Wasichana. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
