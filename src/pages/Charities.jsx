import React, { useEffect } from 'react';
import './Charities.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharities } from '../features/charities/charitiesSlice.js';
import { Link } from 'react-router-dom';

const Charities = () => {
  const dispatch = useDispatch();
  const { charities, loading, error } = useSelector((state) => state.charities);

  useEffect(() => {
    dispatch(fetchCharities());
  }, [dispatch]);

  return (
    <div className="tw-charities-page">
      <section className="charities-header">
        <h1>Partner Charities</h1>
        <p>These organizations are on the ground making real impact for schoolgirls across Africa.</p>
      </section>

      {loading && <p>Loading charities...</p>}
      {error && <p className="error">{error}</p>}

      <div className="charities-grid">
        {charities.map((charity) => (
          <Link to={`/charities/${charity.id}`} key={charity.id} className="charity-card">
            <h3>{charity.name}</h3>
            <p>{charity.mission || charity.description}</p>
            <button className="details-btn">View Details</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Charities;

