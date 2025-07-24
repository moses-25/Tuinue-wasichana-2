import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Empower Her Future</h1>
        <p>
          Join us in supporting schoolgirls across Africa with access to education,
          mentorship, and resources they need to thrive.
        </p>
        <Link to="/donate" className="hero-btn">
          Donate Now
        </Link>
      </div>
      <div className="hero-image">
        <img src="/assets/image1.jpg" alt="Empowered African schoolgirl" />
      </div>
    </section>
  );
};

export default HeroSection;

