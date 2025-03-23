import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://amazon-backend-deploy-bk17.onrender.com",
});

export { axiosInstance };
