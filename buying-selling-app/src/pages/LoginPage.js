import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
	  const navigate = useNavigate();
	const [email, setEmail] = useState('');
	  const [password, setPassword] = useState('');

	  const handleLogin = (e) => {
		      e.preventDefault();
		  console.log('Logged in with:', { email, password });

		  navigate('/dashboard');
		    };

	return (
		    <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
		      <h2 className="text-2xl font-bold mb-4">Login</h2>
		      <form onSubmit={handleLogin}>
		        <div className="mb-4">
		          <label className="block text-sm font-medium">Email</label>
		          <input
		            type="email"
		            value={email}
		            onChange={(e) => setEmail(e.target.value)}
		            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
		          />
		        </div>

		        <div className="mb-4">
		          <label className="block text-sm font-medium">Password</label>
		          <input
		            type="password"
		            value={password}
		            onChange={(e) => setPassword(e.target.value)}
		            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
		          />
		        </div>

		        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
		          Login
		        </button>
		      </form>
		    </div>
		  );
};

export default LoginPage;
