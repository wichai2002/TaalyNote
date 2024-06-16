import axios from 'axios';

const token = localStorage.getItem('token')

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Authorization: token || ""
  }
  
});

export default api;