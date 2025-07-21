import React from "react";
import "./Dashboard.css";

const Dashboard = ({ user }) => (
  <div className="dashboard-container">
    <h1>Dashboard</h1>
    {user ? (
      <div className="dashboard-info">
        <p>Welcome, <strong>{user.name || user.email}</strong>!</p>
        <ul>
          <li><a href="/donations">Your Donations</a></li>
          <li><a href="/charities">Charities</a></li>
          <li><a href="/stories">Stories</a></li>
          {user.isAdmin && <li><a href="/admin">Admin Panel</a></li>}
        </ul>
      </div>
    ) : (
      <p>Please <a href="/login">login</a> to view your dashboard.</p>
    )}
  </div>
);

export default Dashboard;