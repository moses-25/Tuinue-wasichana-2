import React from "react";
import "./AdminDashboard.css";

const AdminDashboard = ({ stats = {}, recentCharities = [], recentDonations = [] }) => {
  return (
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>
      <div className="admin-dashboard-stats">
        <div className="admin-dashboard-card">
          <span className="admin-dashboard-card-label">Total Charities</span>
          <span className="admin-dashboard-card-value">{stats.totalCharities ?? 0}</span>
        </div>
        <div className="admin-dashboard-card">
          <span className="admin-dashboard-card-label">Total Donations</span>
          <span className="admin-dashboard-card-value">${stats.totalDonations ?? 0}</span>
        </div>
        <div className="admin-dashboard-card">
          <span className="admin-dashboard-card-label">Beneficiaries</span>
          <span className="admin-dashboard-card-value">{stats.totalBeneficiaries ?? 0}</span>
        </div>
      </div>
      <div className="admin-dashboard-lists">
        <div className="admin-dashboard-list-section">
          <h3>Recent Charity Applications</h3>
          {recentCharities.length === 0 ? (
            <div className="admin-dashboard-empty">No recent charities.</div>
          ) : (
            <ul>
              {recentCharities.map((charity) => (
                <li key={charity.id}>
                  <strong>{charity.name}</strong> ({charity.email})
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="admin-dashboard-list-section">
          <h3>Recent Donations</h3>
          {recentDonations.length === 0 ? (
            <div className="admin-dashboard-empty">No recent donations.</div>
          ) : (
            <ul>
              {recentDonations.map((donation, idx) => (
                <li key={donation.id || idx}>
                  ${donation.amount} to <strong>{donation.charityName}</strong> on{" "}
                  {donation.date ? new Date(donation.date).toLocaleDateString() : "Unknown"}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;