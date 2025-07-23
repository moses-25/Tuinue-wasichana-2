import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="tw-about-page">
      <section className="about-hero">
        <h1>About Tuinue Wasichana</h1>
        <p>Empowering African schoolgirls through access to education, resources, and hope for a brighter future.</p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Tuinue Wasichana exists to uplift girls from underserved communities across Africa by tackling barriers to education
          such as poverty, menstrual health, and social stigma.
        </p>
      </section>

      <section className="about-values">
        <h2>What We Stand For</h2>
        <ul>
          <li><strong>Access:</strong> Every girl deserves the right to learn and grow.</li>
          <li><strong>Dignity:</strong> We provide hygiene kits and resources for confident, healthy learning.</li>
          <li><strong>Empowerment:</strong> Our programs foster leadership, self-worth, and independence.</li>
        </ul>
      </section>

      <section className="about-impact">
        <h2>Our Impact</h2>
        <p>
          Since our inception, we’ve helped over <strong>10,000 girls</strong> stay in school through scholarships, mentorship, and dignity kits.
        </p>
      </section>
    </div>
  );
};

export default About;

