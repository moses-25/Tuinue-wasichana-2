import React from 'react';
import './Home.css';
import HeroSection from '../components/HeroSection.jsx';
import ProgramCard from '../components/ProgramCard.jsx';
import StoryCard from '../components/StoryCard.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="tw-home">
      <HeroSection />
      <section className="intro-section">
        <div className="intro-content">
          <h2>Why Tuinue Wasichana?</h2>
          <p>We are on a mission to uplift schoolgirls in Africa by providing education, dignity kits, mentorship, and safe learning environments.</p>
          <Link to="/about" className="cta-button">Learn More</Link>
        </div>
      </section>
      <section className="featured-section">
        <div className="featured-section-header">
          <h2>Our Programs</h2>
          <p>Discover how your donations are making a difference in the lives of schoolgirls across Africa.</p>
        </div>
        <div className="program-cards">
          <ProgramCard title="Education Support" description="Scholarships, tuition, and school supplies." />
          <ProgramCard title="Health & Sanitation" description="Access to menstrual hygiene kits and clean water." />
          <ProgramCard title="Mentorship" description="Empowering girls through role models and leadership training." />
        </div>
        <Link to="/programs" className="cta-link">View All Programs</Link>
      </section>
      <section className="featured-section">
        <div className="featured-section-header">
          <h2>Real Stories</h2>
          <p>Inspiring journeys of transformation through education and support.</p>
        </div>
        <div className="story-cards">
          <StoryCard title="Amina's Journey" snippet="From rural Kenya to top of her class..." />
          <StoryCard title="Hope Restored" snippet="How a simple donation changed my path..." />
        </div>
        <Link to="/stories" className="cta-link">Read More Stories</Link>
      </section>
    </div>
  );
};

export default Home;

