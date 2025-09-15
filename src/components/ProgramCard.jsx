import React from 'react';
import './ProgramCard.css';

const ProgramCard = ({ title, description }) => {
  // Simple SVG icons for each program type
  const getIcon = () => {
    switch(title) {
      case "Education Support":
        return (
          <svg viewBox="0 0 24 24">
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
          </svg>
        );
      case "Health & Sanitation":
        return (
          <svg viewBox="0 0 24 24">
            <path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm12 11h-4v-4H8v4H4v-5c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v5z"/>
            <path d="M13 10h-2v2H9v2h2v2h2v-2h2v-2h-2z"/>
          </svg>
        );
      case "Mentorship":
        return (
          <svg viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );
    }
  };

  return (
    <div className="program-card">
      <div className="icon-wrapper">
        {getIcon()}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProgramCard;

