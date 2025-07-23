import React from 'react';
import './StoryCard.css';
import { Link } from 'react-router-dom';

const StoryCard = ({ id, image, title, snippet }) => {
  return (
    <div className="story-card">
      <img src={image} alt={title} />
      <div className="story-content">
        <h3>{title}</h3>
        <p>{snippet}</p>
        <Link to={`/stories/${id}`} className="read-more">Read More</Link>
      </div>
    </div>
  );
};

export default StoryCard;

