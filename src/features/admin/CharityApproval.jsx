import React, { useEffect } from 'react';
import './CharityApproval.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPendingCharities, approveCharity, rejectCharity } from '../adminSlice';

const CharityApproval = () => {
  const dispatch = useDispatch();
  const { pendingCharities, loading, error } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(fetchPendingCharities());
  }, [dispatch]);

  const handleApprove = (id) => {
    dispatch(approveCharity(id));
  };

  const handleReject = (id) => {
    dispatch(rejectCharity(id));
  };

  if (loading) return <p>Loading pending applications...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="charity-approval">
      <h2>Charity Applications</h2>
      {pendingCharities.length === 0 ? (
        <p>No pending applications.</p>
      ) : (
        <ul className="charity-list">
          {pendingCharities.map((charity) => (
            <li key={charity.id} className="charity-card">
              <h3>{charity.name}</h3>
              <p>{charity.description}</p>
              <div className="actions">
                <button onClick={() => handleApprove(charity.id)} className="approve">Approve</button>
                <button onClick={() => handleReject(charity.id)} className="reject">Reject</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CharityApproval;
