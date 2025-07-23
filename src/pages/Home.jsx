import React from 'react';
import './Home.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import ProgramCard from '../../components/ProgramCard/ProgramCard';
import StoryCard from '../../components/StoryCard/StoryCard';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="tw-home">
      <HeroSection />
      <section className="tw-intro">
        <h2>Why Tuinue Wasichana?</h2>
        <p>We are on a mission to uplift schoolgirls in Africa by providing education, dignity kits, mentorship, and safe learning environments.</p>
        <Link to="/about" className="tw-cta-button">Learn More</Link>
      </section>
      <section className="tw-featured-programs">
        <h2>Our Programs</h2>
        <div className="program-cards">
          <ProgramCard title="Education Support" description="Scholarships, tuition, and school supplies." />
          <ProgramCard title="Health & Sanitation" description="Access to menstrual hygiene kits and clean water." />
          <ProgramCard title="Mentorship" description="Empowering girls through role models and leadership training." />
        </div>
        <Link to="/programs" className="tw-cta-link">View All Programs</Link>
      </section>
      <section className="tw-stories-preview">
        <h2>Real Stories</h2>
        <div className="story-cards">
          <StoryCard title="Amina's Journey" snippet="From rural Kenya to top of her class..." />
          <StoryCard title="Hope Restored" snippet="How a simple donation changed my path..." />
        </div>
        <Link to="/stories" className="tw-cta-link">Read More Stories</Link>
      </section>
    </div>
  );
};

export default Home;

