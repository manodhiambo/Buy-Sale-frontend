import axios from "axios";

const instance = axios.create({
	  baseURL: "http://localhost:5000/api", // Backend server URL
	headers: {
		    "Content-Type": "application/json",
		  },
});

// Export instance for use in components
export default instance;
