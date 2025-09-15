import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Empower <span>Her</span> Future</h1>
          <p>
            Join us in supporting schoolgirls across Africa with access to education,
            mentorship, and resources they need to thrive.
          </p>
          <div className="hero-buttons">
            <Link to="/donate" className="hero-btn">
              Donate Now
            </Link>
            <Link to="/about" className="hero-btn secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-image-container">
          <img 
            src="/assets/images/image 1.jpg" 
            alt="Empowered African schoolgirl" 
            className="hero-image"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

