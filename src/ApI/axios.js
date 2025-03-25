import axios from "axios";

const axiosInstance = axios.create({
  //baseURL: "http://localhost:5000"
  baseURL: "https://amazon-backend-deploy-7qbc.onrender.com"
});

export { axiosInstance };
