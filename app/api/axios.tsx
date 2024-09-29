import axios from "axios";

export const axiosClient = axios.create({
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  },
  baseURL: "http://localhost:8080",
  withCredentials: false
});
