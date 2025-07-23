import React from 'react';
import './CharityDetails.css';
import { useParams, Link } from 'react-router-dom';

// Mock data (replace with Redux/store later if needed)
const mockCharities = [
  {
    id: '1',
    name: 'Hope for Girls',
    description: 'Providing scholarships, mentorship, and hygiene kits to schoolgirls in rural Kenya.',
    image: '/assets/images/charity1.jpg',
    tags: ['Education', 'Kenya', 'Girls'],
  },
  {
    id: '2',
    name: 'Bright Future Foundation',
    description: 'Ensuring girls in Uganda stay in school through meals and supplies.',
    image: '/assets/images/charity2.jpg',
    tags: ['Nutrition', 'Uganda', 'Access to Education'],
  },
];

const CharityDetails = () => {
  const { id } = useParams();
  const charity = mockCharities.find((charity) => charity.id === id);

  if (!charity) {
    return <p>Charity not found.</p>;
  }

  return (
    <div className="charity-details">
      <h2>{charity.name}</h2>
      <img src={charity.image} alt={charity.name} />
      <p className="description">{charity.description}</p>

      <div className="charity-meta">
        {charity.tags.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </div>

      <Link to="/donate" className="donate-button">Donate Now</Link>
    </div>
  );
};

export default CharityDetails;

