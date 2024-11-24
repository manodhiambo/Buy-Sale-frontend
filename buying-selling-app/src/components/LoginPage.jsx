import React, { useState } from "react";
import axios from "../api/apiService";

const LoginPage = () => {
	  const [email, setEmail] = useState("");
	  const [password, setPassword] = useState("");

	  const handleLogin = async (e) => {
		      e.preventDefault();
		      try {
			            const response = await axios.post("/auth/login", { email, password });
			            alert(response.data.message || "Login successful! Check your email/phone for the authentication code.");
			          } catch (error) {
					        console.error(error.response.data);
					        alert(error.response.data.message || "Login failed!");
					      }
		    };

	  return (
		      <div className="flex flex-col items-center mt-10">
		        <h2 className="text-2xl font-bold mb-4">Login</h2>
		        <form onSubmit={handleLogin} className="flex flex-col gap-4">
		          <input
		            type="text"
		            placeholder="Email or Phone"
		            value={email}
		            onChange={(e) => setEmail(e.target.value)}
		            className="p-2 border rounded"
		          />
		          <input
		            type="password"
		            placeholder="Password"
		            value={password}
		            onChange={(e) => setPassword(e.target.value)}
		            className="p-2 border rounded"
		          />
		          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
		            Login
		          </button>
		        </form>
		      </div>
		    );
};

export default LoginPage;
