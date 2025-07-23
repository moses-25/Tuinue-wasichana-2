import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="tw-footer">
      <div className="footer-container">
        {/* Brand & Mission */}
        <div className="footer-section brand">
          <h2 className="footer-logo">
            Tuinue <span>Wasichana</span>
          </h2>
          <p className="footer-tagline">
            Empowering schoolgirls across Africa through education and care.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/stories">Stories</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="footer-section contact">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:moses@tuinue.org">moses@tuinue.org</a></p>
          <p>Phone: <a href="tel:+254757268162">+254 757 268 162</a></p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              <img src="/assets/icons/facebook.svg" alt="Facebook icon" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="/assets/icons/twitter.svg" alt="Twitter icon" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="/assets/icons/instagram.svg" alt="Instagram icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Notice */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tuinue Wasichana. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

