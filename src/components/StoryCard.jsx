import React from 'react';
import './StoryCard.css';

const StoryCard = ({ image, name, age, story }) => {
  return (
    <div className="story-card">
      <img src={image} alt={name} className="story-image" />
      <div className="story-content">
        <h4>{name}, {age}</h4>
        <p>{story}</p>
      </div>
    </div>
  );
};

export default StoryCard;
