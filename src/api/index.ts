import axios from 'axios';
const baseURL = 'https://digitalmoney.ctd.academy';

export function setupApiClient() {
  const api = axios.create({
    baseURL: baseURL
  });

  return api;
}
