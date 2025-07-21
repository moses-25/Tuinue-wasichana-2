import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 8000,
  headers: {
    "Content-Type": "application/json"
  }
});

// Optional: Add interceptors for auth tokens, error handling etc.
axiosInstance.interceptors.request.use(
  (config) => {
    // Example: attach token if available
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 responses globally, etc.
    return Promise.reject(error);
  }
);

export default axiosInstance;