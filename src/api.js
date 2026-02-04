import axios from "axios";
  // baseURL: "http://localhost:3000/api",

const api = axios.create({
  baseURL: "https://budgify-expensetracker-backend.onrender.com",
  withCredentials: true,
});

export default api;