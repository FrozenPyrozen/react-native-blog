import axios from 'axios';

// enter new baseURL from terminal with ngrok
export default axios.create({
  baseURL: 'http://6b367276.ngrok.io',
});
