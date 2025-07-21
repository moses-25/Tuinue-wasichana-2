import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="tw-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Tuinue <span>Wasichana</span></h2>
          <p>Empowering schoolgirls across Africa through education and care.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/stories">Stories</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: moses@tuinue.org</p>
          <p>Phone: +254 757 268 162</p>
          <div className="socials">
            <a href="#"><img src="/assets/icons/facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="/assets/icons/twitter.svg" alt="Twitter" /></a>
            <a href="#"><img src="/assets/icons/instagram.svg" alt="Instagram" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tuinue Wasichana. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

