import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
	  const [user, setUser] = useState({
		      name: '',
		      email: '',
		    });
	useEffect(() => {
		const fetchedUser = {
			      name: 'John Doe',
			      email: 'johndoe@example.com',
			    };
		    setUser(fetchedUser);
		  }, []);

	  const handleChange = (e) => {
		      const { name, value } = e.target;
		      setUser({ ...user, [name]: value });
		    };

	  const handleSubmit = (e) => {
		      e.preventDefault();

		  // Handle updating the profile via API

		  console.log('Updated profile:', user);
		    };

	  return (
		      <div className="container mx-auto max-w-md p-6 bg-white rounded-lg shadow-md">
		        <h2 className="text-2xl font-bold mb-4 text-center">Your Profile</h2>
		        <form onSubmit={handleSubmit}>
		          <div className="mb-4">
		            <label className="block text-sm font-medium mb-1">Name</label>
		            <input
		              type="text"
		              name="name"
		              value={user.name}
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
		              value={user.email}
		              onChange={handleChange}
		              className="w-full px-3 py-2 border border-gray-300 rounded-md"
		              placeholder="Enter your email"
		            />
		          </div>
		          <button
		            type="submit"
		            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
		          >
		            Save Changes
		          </button>
		        </form>
		      </div>
		    );
};

export default ProfilePage;
