import React from 'react';
import './Home.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import ProgramCard from '../../components/ProgramCard/ProgramCard';
import StoryCard from '../../components/StoryCard/StoryCard';
import Footer from '../../components/Footer/Footer';

import feesIcon from '../../assets/icons/fees.svg';
import mealsIcon from '../../assets/icons/meals.svg';
import padsIcon from '../../assets/icons/pads.svg';

const Home = () => {
  return (
    <div className="tw-home">
      <HeroSection />

      <section className="programs-section">
        <h2>Our Programs</h2>
        <div className="programs-grid">
          <ProgramCard
            icon={feesIcon}
            title="School Fees"
            description="Covers tuition for girls in primary, secondary, or high school."
          />
          <ProgramCard
            icon={padsIcon}
            title="Sanitary Kits"
            description="Monthly supplies that help girls stay in school with dignity."
          />
          <ProgramCard
            icon={mealsIcon}
            title="School Meals"
            description="Daily meals to keep girls energized and in school."
          />
        </div>
      </section>

      <section className="stories-section">
        <h2>Real Stories</h2>
        <div className="stories-grid">
          <StoryCard
            image="/assets/images/achieng.jpg"
            name="Achieng"
            age="14"
            story="Thanks to your support, I never miss class anymore!"
          />
          <StoryCard
            image="/assets/images/zahara.jpg"
            name="Zahara"
            age="12"
            story="The books and bag I received make learning so much fun."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
