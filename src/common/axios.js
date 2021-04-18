import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_PATH,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'token': process.env.REACT_APP_API_TOKEN
  },
});

export default axiosInstance;
