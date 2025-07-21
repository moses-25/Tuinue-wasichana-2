import React from 'react';
import './HeroSection.css';
import Button from '../Button/Button';
import heroImg from '../../assets/images/image 1.jpg'; // Replace with your real image path

const HeroSection = () => {
  return (
    <section className="tw-hero">
      <div className="hero-content">
        <h1>Support Her Dreams</h1>
        <p>Tuinue Wasichana connects donors to trusted charities keeping African girls in school, safe, and empowered.</p>
        <Button text="Start Donating" onClick={() => window.location.href = '/donate'} />
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="African schoolgirl smiling" />
      </div>
    </section>
  );
};

export default HeroSection;
