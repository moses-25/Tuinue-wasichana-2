import React from 'react';
import './HeroSection.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="tw-hero">
      <div className="hero-content">
        <h1>Support Her Dreams, Change Her Future</h1>
        <p>
          Join us in empowering African schoolgirls through education, hygiene, and mentorship.
          Every donation helps a girl stay in school with dignity.
        </p>
        <div className="hero-buttons">
          <Link to="/donate">
            <Button text="Donate Now" />
          </Link>
          <Link to="/programs">
            <Button text="Our Programs" variant="secondary" />
          </Link>
        </div>
      </div>

      <div className="hero-image">
        <img src="/assets/images/hero-girl.png" alt="Smiling African schoolgirl" />
      </div>
    </section>
  );
};

export default HeroSection;

