import React from 'react';
import './CharityDetails.css';
import Button from '../../components/Button/Button';
import StoryCard from '../../components/StoryCard/StoryCard';

const charity = {
  name: 'GirlPower Foundation',
  logo: '/assets/images/girlpower-logo.png',
  mission: 'Empowering young girls through education and life skills training.',
  raised: 84200,
  target: 100000,
  location: 'Kibera, Nairobi',
  impactStories: [
    {
      image: '/assets/images/grace.jpg',
      name: 'Grace',
      age: '13',
      story: 'With GirlPower’s help, Grace received school meals and confidence mentorship sessions.'
    },
    {
      image: '/assets/images/nyambura.jpg',
      name: 'Nyambura',
      age: '11',
      story: 'She no longer misses school during her period thanks to hygiene support.'
    }
  ]
};

const CharityDetails = () => {
  const progress = Math.floor((charity.raised / charity.target) * 100);

  return (
    <div className="tw-charity-details">
      <div className="charity-header">
        <img src={charity.logo} alt="Charity Logo" />
        <div>
          <h1>{charity.name}</h1>
          <p className="location">{charity.location}</p>
          <p className="mission">{charity.mission}</p>
        </div>
      </div>

      <div className="donation-progress">
        <p>Raised KES {charity.raised.toLocaleString()} of KES {charity.target.toLocaleString()}</p>
        <div className="progress-bar">
          <div className="filled" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <Button text="Donate Now" />

      <div className="impact-stories">
        <h2>Impact Stories</h2>
        <div className="stories-list">
          {charity.impactStories.map((story, idx) => (
            <StoryCard key={idx} {...story} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharityDetails;

