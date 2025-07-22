import axiosInstance from './axiosInstance';

// Example: Ping server or check user token
export const pingServer = async () => {
  const res = await axiosInstance.get('/ping');
  return res.data;
};

// Example: Generic POST helper
export const postData = async (endpoint, payload) => {
  const res = await axiosInstance.post(endpoint, payload);
  return res.data;
};

// Example: File upload
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

