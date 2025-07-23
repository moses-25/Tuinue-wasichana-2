import React from 'react';
import './Dashboard.css';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="tw-dashboard">
        <h2>You are not logged in</h2>
        <p>Please log in to view your dashboard.</p>
        <Link to="/login" className="btn">
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="tw-dashboard">
      <h1>Welcome, {user?.name || 'User'} </h1>
      <p className="subtitle">Here s a quick overview of your account and activity.</p>

      <div className="dashboard-cards">
        <Link to="/donate" className="dash-card">
          <h3>Donate</h3>
          <p>Make a one-time or recurring donation</p>
        </Link>

        <Link to="/charities" className="dash-card">
          <h3>Browse Charities</h3>
          <p>See all verified organizations</p>
        </Link>

        <Link to="/stories" className="dash-card">
          <h3>Impact Stories</h3>
          <p>Read how your support changes lives</p>
        </Link>

        {user?.role === 'admin' && (
          <Link to="/admin" className="dash-card admin-card">
            <h3>Admin Panel</h3>
            <p>Manage charities, donations & users</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

