// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/", // Altere para o URL da sua API
});

export default api;
