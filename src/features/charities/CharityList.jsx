import React, { useEffect } from 'react';
import './CharityList.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharities } from '../charitiesSlice';

const CharityList = () => {
  const dispatch = useDispatch();
  const { charities, loading, error } = useSelector((state) => state.charities);

  //useEffect(() => {
   // dispatch(fetchCharities());
  //}, [dispatch]);

  return (
    <div className="charity-list">
      <h2>Explore Charities</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="charities">
        {charities.map((charity) => (
          <div key={charity.id} className="charity-card">
            <img src={charity.image} alt={charity.name} />
            <h3>{charity.name}</h3>
            <p>{charity.mission}</p>
            <a href={`/charities/${charity.id}`}>View More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharityList;

