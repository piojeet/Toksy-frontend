import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://toksy-backend.onrender.com",
    withCredentials: true, //send cookies with the request
})