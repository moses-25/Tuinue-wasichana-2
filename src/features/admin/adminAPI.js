import axios from 'axios';

const BASE_URL = 'https://your-backend-api.com/api/admin'; // Replace with your actual backend base URL

// Get dashboard stats
export const getAdminStatsAPI = async () => {
  return await axios.get(`${BASE_URL}/stats`);
};

// Get pending charity applications
export const getPendingCharitiesAPI = async () => {
  return await axios.get(`${BASE_URL}/charities/pending`);
};

// Approve charity application
export const approveCharityAPI = async (id) => {
  return await axios.patch(`${BASE_URL}/charities/${id}/approve`);
};

// Reject charity application
export const rejectCharityAPI = async (id) => {
  return await axios.delete(`${BASE_URL}/charities/${id}/reject`);
};
