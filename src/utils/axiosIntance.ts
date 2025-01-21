import axios from 'axios';
import { BACKEND_API } from '../config';

const token = localStorage.getItem('accessToken');

// Create axios instance
const axiosInstance = axios.create({
  baseURL: BACKEND_API,
});

axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default axiosInstance;
