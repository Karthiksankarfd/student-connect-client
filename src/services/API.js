import axios from 'axios';
// require('dotenv').config();
// let ip = process.env.IP_ADDRESS;
const API = axios.create({
  // https://student-connect-server.onrender.com
  // Backend API base URL
  baseURL: `https://student-connect-server.onrender.com/api`, 
  // baseURL: `http://192.168.1.2:5000/api`,
  // // Backend API base URL
  headers: {
    'Content-Type': 'application/json',
  },
}); 

// Add a request interceptor (optional: for adding tokens or logging)
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token'); // Example: fetch token from localStorage
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

export default API;
