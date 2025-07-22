// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'https://your-backend-api.com/api', // ✅ Replace with your backend URL
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// OPTIONAL: Attach token automatically if stored in localStorage or Redux
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token'); // Or get it from Redux store
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export default axiosInstance;

