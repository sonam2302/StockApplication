// api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Update with your API Gateway URL

const api = axios.create({
  baseURL: API_URL,
});

export default api;
