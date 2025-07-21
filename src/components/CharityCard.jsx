import React from 'react';
import './CharityCard.css';
import { Link } from 'react-router-dom';

const CharityCard = ({ id, image, name, description }) => {
  return (
    <div className="tw-charity-card">
      <img src={image} alt={`${name} logo`} className="charity-img" />
      <div className="charity-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <Link to={`/charities/${id}`} className="view-more">
          View More
        </Link>
      </div>
    </div>
  );
};

export default CharityCard;

