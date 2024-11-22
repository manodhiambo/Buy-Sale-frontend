import React, { useState } from 'react';

const LoginPage = () => {
	  const [email, setEmail] = useState('');
	  const [password, setPassword] = useState('');

	  const handleSubmit = (e) => {
		      e.preventDefault();
		   console.log('Logging in with:', { email, password });
		    };

	  return (
		      <div className="container mx-auto max-w-sm p-6 bg-white rounded-lg shadow-md">
		        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
		        <form onSubmit={handleSubmit}>
		          <div className="mb-4">
		            <label className="block text-sm font-medium mb-1">Email</label>
		            <input
		              type="email"
		              value={email}
		              onChange={(e) => setEmail(e.target.value)}
		              className="w-full px-3 py-2 border border-gray-300 rounded-md"
		              placeholder="Enter your email"
		            />
		          </div>
		          <div className="mb-4">
		            <label className="block text-sm font-medium mb-1">Password</label>
		            <input
		              type="password"
		              value={password}
		              onChange={(e) => setPassword(e.target.value)}
		              className="w-full px-3 py-2 border border-gray-300 rounded-md"
		              placeholder="Enter your password"
		            />
		          </div>
		          <button
		            type="submit"
		            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
		          >
		            Login
		          </button>
		        </form>
		      </div>
		    );
};

export default LoginPage;
