import axios from "axios";
import { getAuthData } from "./auth";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

api.interceptors.request.use(async (request) => {
  const token = await getAuthData();
  if (!request.headers.authorization && token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

export default api;
