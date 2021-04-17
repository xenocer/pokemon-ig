import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: process.env.API_PATH,
  timeout: 30000,
  headers: {'token': process.env.API_TOKEN}
});
