import axios from 'axios';

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public'
});

api.defaults.timeout = 60 * 0.3 * 1000; // 30 sec

export default api;
