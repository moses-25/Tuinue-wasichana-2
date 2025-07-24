import React from 'react';
import './CharityCard.css';
import { Link } from 'react-router-dom';

// Import images
import charity1 from '../assets/images/charity1.jpg';
import charity2 from '../assets/images/charity2.jpg';
import charity3 from '../assets/images/charity3.jpg';
import defaultImage from '../assets/images/default.jpg';

const imageMap = {
  'charity1.jpg': charity1,
  'charity2.jpg': charity2,
  'charity3.jpg': charity3,
  'default.jpg': defaultImage,
};

const CharityCard = ({ id, name, image, mission, location }) => {
  const imageUrl = imageMap[image] || defaultImage;

  return (
    <div className="charity-card">
      <img src={imageUrl} alt={name} className="charity-img" />
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

