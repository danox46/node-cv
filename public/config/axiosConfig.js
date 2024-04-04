import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5173/api/v1',
});

export default instance;
