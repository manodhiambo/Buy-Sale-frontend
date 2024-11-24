import React, { useState } from "react";
import axios from "../api/apiService";

const RegisterPage = () => {
	  const [email, setEmail] = useState("");
	  const [password, setPassword] = useState("");

	  const handleRegister = async (e) => {
		      e.preventDefault();
		      try {
			            const response = await axios.post("/auth/register", { email, password });
			            alert(response.data.message || "Registration successful! Check your email or phone for the authentication code.");
			          } catch (error) {
					        console.error(error.response.data);
					        alert(error.response.data.message || "Registration failed!");
					      }
		    };

	  return (
		  <div className="flex flex-col items-center bg-gray-100 min-h-screen p-10">
		    <h2 className="text-3xl font-bold mb-6 text-blue-700">Register</h2>
		    <form onSubmit={handleRegister} className="w-full max-w-md bg-white p-8 rounded shadow-md">
		      <input
		        className="w-full p-3 mb-4 border rounded"
		        type="email"
		        placeholder="Enter your email"
		        value={email}
		        onChange={(e) => setEmail(e.target.value)}
		      />
		      <input
		        className="w-full p-3 mb-4 border rounded"
		        type="password"
		        placeholder="Create a password"
		        value={password}
		        onChange={(e) => setPassword(e.target.value)}
		      />
		      <button
		        type="submit"
		        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
		      >
		        Register
		      </button>
		    </form>
		  </div>
		    );
};

export default RegisterPage;

