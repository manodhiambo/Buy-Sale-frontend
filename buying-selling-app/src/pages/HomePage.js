import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
	  return (
		      <div className="container mx-auto text-center py-10">
		        <h1 className="text-4xl font-bold mb-6">Welcome to Our Marketplace</h1>
		        <p className="text-lg text-gray-700 mb-8">
		          Buy and sell products easily and securely. Join us today to explore amazing deals!
		        </p>
		        <div className="flex justify-center space-x-4">
		          <Link to="/products" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
		            View Products
		          </Link>
		          <Link to="/login" className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
		            Login
		          </Link>
		        </div>
		      </div>
		    );
};

export default HomePage;
