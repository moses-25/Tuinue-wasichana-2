import axios from 'axios';

const BASE_URL = 'https://your-backend-api.com/api/donations'; // Replace with your actual backend route

// Submit a new donation
export const submitDonationAPI = async (data) => {
  return await axios.post(`${BASE_URL}`, data);
};

// Get user's donation history
export const fetchDonationHistoryAPI = async () => {
  return await axios.get(`${BASE_URL}/history`);
};
