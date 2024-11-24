import axios from "../api/apiService";

const apiService = axios.create({
	  baseURL: "http://localhost:5000/api", // Backend server URL
	headers: {
		    "Content-Type": "application/json",
		  },
	timeout: 10000,
});

apiService.interceptors.response.use(
	  (response) => response,
	  (error) => {

return Promise.reject(error);
		    }
);

export default apiService;
