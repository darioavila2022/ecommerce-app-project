import axios from "axios";

const BASE_URL = "http://ecommerce.app.up.railway.app/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})