import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
	  return (
		      <div className="container mx-auto p-6 text-center">
		        <h1 className="text-4xl font-bold mb-4">Welcome to Buy & Sell App</h1>
		        <p className="text-xl mb-6">Explore amazing products and start buying or selling today.</p>
		        
		        <div className="flex justify-center space-x-4">
		          <Link to="/login" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
		            Login
		          </Link>
		          <Link to="/register" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
		            Register
		          </Link>
		        </div>

		        <div className="mt-10">
		          <h2 className="text-3xl font-semibold">Featured Products</h2>
		          {/* Add your product display component or featured items here */}
		        </div>
		      </div>
		    );
};

export default HomePage;

