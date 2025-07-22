import React, { useEffect } from 'react';
import './CharityDetails.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharityById } from '../charitiesSlice';

const CharityDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedCharity, loading, error } = useSelector((state) => state.charities);

  useEffect(() => {
    dispatch(fetchCharityById(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading charity details...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!selectedCharity) return <p>Charity not found.</p>;

  return (
    <div className="charity-details">
      <h2>{selectedCharity.name}</h2>
      <img src={selectedCharity.image} alt={selectedCharity.name} />
      <p><strong>Mission:</strong> {selectedCharity.mission}</p>
      <p><strong>Location:</strong> {selectedCharity.location}</p>
      <p><strong>Contact:</strong> {selectedCharity.email}</p>
      <p><strong>Website:</strong> <a href={selectedCharity.website} target="_blank" rel="noopener noreferrer">{selectedCharity.website}</a></p>
    </div>
  );
};

export default CharityDetails;
