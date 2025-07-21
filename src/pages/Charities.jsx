import React from 'react';
import './Charities.css';
import CharityCard from '../../components/CharityCard/CharityCard';

const sampleCharities = [
  {
    id: 1,
    name: "Girls First Foundation",
    location: "Kisumu, Kenya",
    mission: "Empowering rural girls through education and menstrual health.",
    image: "/assets/images/girlsfirst.jpg"
  },
  {
    id: 2,
    name: "Hope for Her",
    location: "Nairobi, Kenya",
    mission: "Providing safe transport and school meals for vulnerable girls.",
    image: "/assets/images/hopeforher.jpg"
  },
  {
    id: 3,
    name: "Future She Leads",
    location: "Mombasa, Kenya",
    mission: "Leadership training and mentorship programs for teen girls.",
    image: "/assets/images/futuresheleads.jpg"
  }
];

const Charities = () => {
  return (
    <div className="tw-charities">
      <h1>Browse Charities</h1>
      <p>Explore trusted organizations you can support directly.</p>

      <div className="charity-grid">
        {sampleCharities.map(charity => (
          <CharityCard
            key={charity.id}
            name={charity.name}
            location={charity.location}
            mission={charity.mission}
            image={charity.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Charities;
