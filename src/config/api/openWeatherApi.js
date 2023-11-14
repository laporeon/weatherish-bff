import axios from 'axios';

export const openWeatherBaseURL = axios.create({
  baseURL: process.env.API_URL,
});
