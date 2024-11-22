import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
	  return (
		      <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md text-center">
		        <h2 className="text-2xl font-bold mb-6">Welcome to the Dashboard</h2>
		        <div className="space-y-4">
		          <Link
		            to="/buy"
		            className="block bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
		          >
		            Buy Products
		          </Link>
		          <Link
		            to="/sell"
		            className="block bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
		          >
		            Sell Products
		          </Link>
		        </div>
		      </div>
		    );
};

export default DashboardPage;
