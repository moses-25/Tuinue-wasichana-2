import React from 'react';
import './Dashboard.css';
import Button from '../../components/Button/Button';

const Dashboard = () => {
  const donations = [
    {
      id: 1,
      charity: 'GirlPower Foundation',
      amount: 1000,
      date: '2025-07-01',
      recurring: true
    },
    {
      id: 2,
      charity: 'Books4Girls',
      amount: 500,
      date: '2025-06-10',
      recurring: false
    }
  ];

  return (
    <div className="tw-dashboard">
      <h1>Your Dashboard</h1>
      <p>Track your impact, donations, and profile settings here.</p>

      <div className="dashboard-section">
        <h2>Donation History</h2>
        <table className="donation-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Charity</th>
              <th>Amount (KES)</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation.id}>
                <td>{donation.date}</td>
                <td>{donation.charity}</td>
                <td>{donation.amount}</td>
                <td>{donation.recurring ? 'Monthly' : 'One-Time'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="dashboard-section">
        <h2>Manage Your Donations</h2>
        <Button text="Edit Payment Info" />
        <Button text="Cancel Recurring Donation" />
      </div>

      <div className="dashboard-section">
        <h2>Saved Charities</h2>
        <p>(Coming Soon)</p>
      </div>
    </div>
  );
};

export default Dashboard;

