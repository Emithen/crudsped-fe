import axios from "axios";
import { authTokenStore } from "../store/authTokenStore";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_SUPABASE_URL + "/functions/v1/main",
  timeout: 5000,
});

instance.interceptors.request.use((config) => {
  const token = authTokenStore.get();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
