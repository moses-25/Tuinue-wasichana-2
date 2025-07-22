import axios from 'axios';

const BASE_URL = 'https://your-backend-api.com/api/charities'; // Replace with your actual backend

// Fetch all charities
export const fetchCharitiesAPI = async () => {
  return await axios.get(`${BASE_URL}`);
};

// Fetch single charity by ID
export const fetchCharityByIdAPI = async (id) => {
  return await axios.get(`${BASE_URL}/${id}`);
};

// Apply to be listed as a charity
export const applyCharityAPI = async (formData) => {
  return await axios.post(`${BASE_URL}/apply`, formData);
};
