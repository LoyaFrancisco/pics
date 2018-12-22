import axios from 'axios';

export default axios.create({
  baseURL:  'https://api.unsplash.com',
  headers: {
    Authorization: 
    'Client-ID 1633b9150fac26a43e923011414d6503e4a7f273baf54de0a90398e0728fd8fb'
  }
});

