import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7002/api"
});

export default api;