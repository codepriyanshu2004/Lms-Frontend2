import axios from "axios"

const Base_URl = "http://localhost:5014/api/v1";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = Base_URl;
axiosInstance.defaults.withCredentials= true;

export default axiosInstance;