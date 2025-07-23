import React from 'react';
import './Programs.css';

const Programs = () => {
  return (
    <div className="tw-programs-page">
      <section className="programs-header">
        <h1>Our Programs</h1>
        <p>We run targeted initiatives that address the core challenges facing schoolgirls in Africa.</p>
      </section>

      <section className="programs-list">
        <div className="program-card">
          <h3>School Sponsorships</h3>
          <p>
            We provide scholarships and tuition support to help girls stay in school and complete their education.
          </p>
        </div>

        <div className="program-card">
          <h3>Dignity Kit Distribution</h3>
          <p>
            Each month, we distribute menstrual hygiene kits to thousands of girls, eliminating a key barrier to attendance.
          </p>
        </div>

        <div className="program-card">
          <h3>Mentorship & Life Skills</h3>
          <p>
            Our mentorship sessions build confidence, leadership, and knowledge about health and self-worth.
          </p>
        </div>

        <div className="program-card">
          <h3>Community Outreach</h3>
          <p>
            We work with parents, teachers, and leaders to promote gender equity and safe learning environments.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Programs;

