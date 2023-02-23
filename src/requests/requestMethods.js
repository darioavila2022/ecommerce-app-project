import axios from "axios";

const BASE_URL = "https://ecommerce-app-project-backend-gaw0i63ak-darioavila2022.vercel.app/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})