import React, { useState } from 'react';

const RegisterPage = () => {
	  const [formData, setFormData] = useState({
		      name: '',
		      email: '',
		      password: '',
		    });

	  const handleChange = (e) => {
		      setFormData({ ...formData, [e.target.name]: e.target.value });
		    };

	  const handleSubmit = (e) => {
		      e.preventDefault();

		  console.log('Registering user with:', formData);
		    };

	  return (
		      <div className="container mx-auto max-w-md p-6 bg-white rounded-lg shadow-md">
		        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
		        <form onSubmit={handleSubmit}>
		          <div className="mb-4">
		            <label className="block text-sm font-medium mb-1">Name</label>
		            <input
		              type="text"
		              name="name"
		              value={formData.name}
		              onChange={handleChange}
		              className="w-full px-3 py-2 border border-gray-300 rounded-md"
		              placeholder="Enter your name"
		            />
		          </div>
		          <div className="mb-4">
		            <label className="block text-sm font-medium mb-1">Email</label>
		            <input
		              type="email"
		              name="email"
		              value={formData.email}
		              onChange={handleChange}
		              className="w-full px-3 py-2 border border-gray-300 rounded-md"
		              placeholder="Enter your email"
		            />
		          </div>
		          <div className="mb-4">
		            <label className="block text-sm font-medium mb-1">Password</label>
		            <input
		              type="password"
		              name="password"
		              value={formData.password}
		              onChange={handleChange}
		              className="w-full px-3 py-2 border border-gray-300 rounded-md"
		              placeholder="Enter your password"
		            />
		          </div>
		          <button
		            type="submit"
		            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
		          >
		            Register
		          </button>
		        </form>
		      </div>
		    );
};

export default RegisterPage;
