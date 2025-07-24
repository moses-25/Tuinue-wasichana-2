import React, { useEffect } from 'react';
import './CharityList.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharities } from '../charitiesSlice';
import CharityCard from '../../components/CharityCard';

const CharityList = () => {
  const dispatch = useDispatch();
  const { charities, loading, error } = useSelector((state) => state.charities);

  useEffect(() => {
    dispatch(fetchCharities());
  }, [dispatch]);

  if (loading) return <p>Loading charities...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="tw-charity-list">
      <h2>Partner Charities</h2>
      <p>Explore and support organizations making a difference for girls' education.</p>
      <div className="charity-grid">
        {charities.map((charity) => (
          <CharityCard key={charity.id} charity={charity} />
        ))}
      </div>
    </div>
  );
};

export default CharityList;

