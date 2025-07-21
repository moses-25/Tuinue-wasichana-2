import React from 'react';
import './ProgramCard.css';

const ProgramCard = ({ icon, title, description }) => {
  return (
    <div className="program-card">
      <div className="program-icon">
        <img src={icon} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProgramCard;
