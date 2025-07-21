import React from 'react';
import './ProgramCard.css';

const ProgramCard = ({ icon, title, description }) => {
  return (
    <div className="tw-program-card">
      <div className="icon-wrapper">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProgramCard;

