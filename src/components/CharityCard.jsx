import React from 'react';
import './CharityCard.css';
import { Link } from 'react-router-dom';

const CharityCard = ({ id, name, image, mission, location }) => {
  return (
    <div className="charity-card">
      <img src={image} alt={name} className="charity-img" />
      <div className="charity-info">
        <h3>{name}</h3>
        <p className="mission">{mission}</p>
        <p className="location">{location}</p>
        <Link to={`/charities/${id}`} className="view-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CharityCard;

