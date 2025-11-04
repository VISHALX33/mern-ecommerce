import axios from "axios";

const API = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5000/api"
      : "https://mern-ecommerce-dhdp.onrender.com/api",
});

// ✅ Attach token if exists
API.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("auron_user") || "null");
  if (user?.token) config.headers.Authorization = `Bearer ${user.token}`;
  return config;
});

export default API;
