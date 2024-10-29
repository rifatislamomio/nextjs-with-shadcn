import axios from "axios";

export const axiosClient = axios.create({
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  },
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: false
});
