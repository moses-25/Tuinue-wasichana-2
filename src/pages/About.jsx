import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="tw-about">
      <section className="about-intro">
        <h1>About Tuinue Wasichana</h1>
        <p>
          Tuinue Wasichana is a digital platform dedicated to transforming the lives of African schoolgirls through education and empowerment.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          We connect generous donors with trusted local charities working hard to keep girls in school, safe, and hopeful. 
          From covering tuition to providing meals and hygiene kits, every donation goes directly toward building a brighter future.
        </p>
      </section>

      <section className="about-belief">
        <h2>Why Girls?</h2>
        <p>
          We believe that when you educate a girl, you uplift a generation. That’s why our mission goes beyond giving —
          we share real stories, track real impact, and create emotional connections between donors and girls.
        </p>
      </section>

      <section className="about-cta">
        <h3>Ready to Make an Impact?</h3>
        <a className="about-btn" href="/donate">Start Donating</a>
      </section>
    </div>
  );
};

export default About;
