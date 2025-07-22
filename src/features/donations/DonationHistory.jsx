import React, { useEffect } from 'react';
import './DonationHistory.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDonationHistory } from '../donationsSlice';

const DonationHistory = () => {
  const dispatch = useDispatch();
  const { history, loading, error } = useSelector((state) => state.donations);

  useEffect(() => {
    dispatch(fetchDonationHistory());
  }, [dispatch]);

  if (loading) return <p>Loading donation history...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!history.length) return <p>You haven't made any donations yet.</p>;

  return (
    <div className="donation-history">
      <h2>Your Donation History</h2>
      <ul>
        {history.map((donation) => (
          <li key={donation.id}>
            <p><strong>Charity:</strong> {donation.charityName}</p>
            <p><strong>Amount:</strong> ${donation.amount}</p>
            <p><strong>Frequency:</strong> {donation.frequency}</p>
            <p><strong>Date:</strong> {new Date(donation.date).toLocaleDateString()}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationHistory;
