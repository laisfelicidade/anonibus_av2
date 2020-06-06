import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-anonibus-984ce.cloudfunctions.net',
});

export default api;
