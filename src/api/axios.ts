import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_SUPABASE_URL + "/functions/v1/main",
  timeout: 5000,
});
