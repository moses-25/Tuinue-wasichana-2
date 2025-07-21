import React from 'react';
import './Programs.css';
import ProgramCard from '../../components/ProgramCard/ProgramCard';

const programs = [
  {
    title: "School Fees Sponsorship",
    description: "Covers tuition for primary, secondary, or high school to ensure girls stay enrolled and focused.",
    icon: "🎓"
  },
  {
    title: "Sanitary Pads & Hygiene Kits",
    description: "Monthly supply of pads, soap, and hygiene items to keep girls in school with dignity.",
    icon: "🩸"
  },
  {
    title: "Books & Learning Materials",
    description: "Provides textbooks, notebooks, stationery, school bags, and digital tools.",
    icon: "📚"
  },
  {
    title: "School Meals Program",
    description: "Ensures daily meals for vulnerable girls to improve focus, energy, and attendance.",
    icon: "🍛"
  },
  {
    title: "Uniforms & Clothing",
    description: "Gives school uniforms, shoes, and sweaters to boost confidence and inclusion.",
    icon: "👕"
  },
  {
    title: "Mentorship & Life Skills",
    description: "Workshops on confidence, leadership, health, and personal growth.",
    icon: "💬"
  },
  {
    title: "Transportation (Coming Soon)",
    description: "Plans to provide safe and reliable transportation for rural girls.",
    icon: "🚗"
  },
  {
    title: "Technology Access (Coming Soon)",
    description: "Plans to offer tablets or labs for rural girls to bridge the digital divide.",
    icon: "💻"
  }
];

const Programs = () => {
  return (
    <div className="tw-programs">
      <h1>Our Programs</h1>
      <p>Each donation goes directly to one of these impactful areas.</p>

      <div className="programs-grid">
        {programs.map((program, index) => (
          <ProgramCard
            key={index}
            title={program.title}
            description={program.description}
            icon={program.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Programs;
