import React from 'react';
import './DonationHistory.css';

const mockDonations = [
  {
    id: 1,
    charityName: 'Educate Girls Foundation',
    amount: 1500,
    frequency: 'Monthly',
    date: '2025-07-01',
  },
  {
    id: 2,
    charityName: 'Hope for Her',
    amount: 1000,
    frequency: 'One-Time',
    date: '2025-06-15',
  },
];

const DonationHistory = () => {
  if (!mockDonations.length) return <p>No donation history yet.</p>;

  return (
    <div className="donation-history">
      <h2>Your Donation History</h2>
      <ul>
        {mockDonations.map((donation) => (
          <li key={donation.id}>
            <p>
              <strong>Charity:</strong> {donation.charityName}
            </p>
            <p>
              <strong>Amount:</strong> KES {donation.amount}
            </p>
            <p>
              <strong>Frequency:</strong> {donation.frequency}
            </p>
            <p>
              <strong>Date:</strong> {new Date(donation.date).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationHistory;

