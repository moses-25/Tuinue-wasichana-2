import React, { useEffect } from 'react';
import './CharityDetails.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharityById } from '../../features/charities/charitiesSlice';

const CharityDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedCharity, loading, error } = useSelector((state) => state.charities);

  useEffect(() => {
    if (id) {
      dispatch(fetchCharityById(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading charity details...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!selectedCharity) return <p>No charity found.</p>;

  return (
    <div className="charity-details">
      <h2>{selectedCharity.name}</h2>
      <p className="mission">{selectedCharity.mission}</p>

      <div className="charity-meta">
        <p><strong>Email:</strong> {selectedCharity.email}</p>
        <p><strong>Website:</strong> <a href={selectedCharity.website} target="_blank" rel="noreferrer">{selectedCharity.website}</a></p>
        <p><strong>Location:</strong> {selectedCharity.location}</p>
      </div>

      <div className="charity-actions">
        <button className="donate-btn">Donate</button>
        <button className="share-btn">Share</button>
      </div>
    </div>
  );
};

export default CharityDetails;

