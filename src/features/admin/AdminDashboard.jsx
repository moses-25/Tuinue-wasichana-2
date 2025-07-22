import React, { useEffect } from 'react';
import './AdminDashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdminStats } from '../adminSlice';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { stats, loading, error } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(fetchAdminStats());
  }, [dispatch]);

  if (loading) return <p>Loading admin data...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="stats-cards">
        <div className="card">Total Donors: {stats.totalDonors}</div>
        <div className="card">Total Donations: KES {stats.totalAmount}</div>
        <div className="card">Charities Pending: {stats.pendingCharities}</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
