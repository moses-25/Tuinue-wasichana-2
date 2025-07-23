import axiosInstance from './axiosInstance';

// Ping the server or simulate a check
export const pingServer = async () => {
  const res = await axiosInstance.get('/ping');
  return res.data;
};

// Generic POST helper (e.g., submitting forms)
export const postData = async (endpoint, payload) => {
  const res = await axiosInstance.post(endpoint, payload);
  return res.data;
};

// File upload simulation
export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const res = await axiosInstance.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data;
};

