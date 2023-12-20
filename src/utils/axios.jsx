import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3300",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     console.log(config);
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default axiosInstance;
