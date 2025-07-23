import React from 'react';
import './ProgramCard.css';

const ProgramCard = ({ title, description, icon }) => {
  return (
    <div className="program-card">
      <div className="icon-wrapper">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProgramCard;

