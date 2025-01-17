import axios from 'axios';
import { BACKEND_API } from '../config';

const axiosInstance = axios.create({
  baseURL: BACKEND_API,
});

export default axiosInstance;
