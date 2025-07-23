import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/', // Base path — leave as root if using local mock data or Vite proxy
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can add interceptors here if needed
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosInstance;
