import axios from 'axios';

// Optional: Set a base URL (you can move this to a central file)
const API_BASE = 'https://your-backend-api.com/api/auth'; //replace with your actual API base URL)

// Login API
export const loginUserAPI = async (credentials) => {
  const response = await axios.post(`${API_BASE}/login`, credentials);
  return response;
};

// Register API
export const registerUserAPI = async (userData) => {
  const response = await axios.post(`${API_BASE}/register`, userData);
  return response;
};
