import React from 'react';
import './CharityCard.css';
import { Link } from 'react-router-dom';

const CharityCard = ({ image, name, mission, id }) => {
  return (
    <div className="charity-card">
      <img src={image} alt={name} className="charity-image" />
      <div className="charity-content">
        <h3>{name}</h3>
        <p>{mission}</p>
        <Link to={`/charities/${id}`} className="view-more-btn">View More</Link>
      </div>
    </div>
  );
};

export default CharityCard;
