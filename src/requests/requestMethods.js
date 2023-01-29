import axios from "axios";

const BASE_URL = "http://ecommerce-app-project-backend.vercel.app";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})