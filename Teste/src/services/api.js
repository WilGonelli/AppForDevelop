/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://valorant-api.com/v1/',
});


export default api;
