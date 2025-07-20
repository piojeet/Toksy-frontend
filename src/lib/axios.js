import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "https://toksy-backend.onrender.com/api"; // use full backend URL

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true, //send cookies with the request
})