import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // You can later replace this with actual user data & roles
  const userType = 'donor'; // Change this to: 'charity' or 'admin'

  return (
    <div className="tw-dashboard">
      <h1>Welcome to Your Dashboard</h1>

      {userType === 'donor' && (
        <section className="dashboard-section">
          <h2>Your Donations</h2>
          <ul>
            <li>Total Donated: KES 8,000</li>
            <li>Recurring: Yes</li>
            <li>Last Donation: July 15, 2025</li>
          </ul>

          <h2>Stories You've Helped Write</h2>
          <p>View real impact from your contributions.</p>
        </section>
      )}

      {userType === 'charity' && (
        <section className="dashboard-section">
          <h2>Charity Summary</h2>
          <ul>
            <li>Total Received: KES 32,000</li>
            <li>Stories Posted: 4</li>
            <li>Beneficiaries Managed: 12</li>
          </ul>
        </section>
      )}

      {userType === 'admin' && (
        <section className="dashboard-section">
          <h2>Admin Tools</h2>
          <ul>
            <li>Pending Charity Applications: 3</li>
            <li>Total Registered Charities: 25</li>
            <li>Donations Processed: 1,200</li>
          </ul>
        </section>
      )}
    </div>
  );
};

export default Dashboard;
