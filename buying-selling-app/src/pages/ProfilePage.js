import React from 'react';

const ProfilePage = () => {
	  const user = {
		      name: 'Kevin Owino Odhiambo',
		      email: 'kevin@example.com',
		      joined: 'January 1, 2022',
		  phone: +254703445756
		    };

	  return (
		      <div className="container mx-auto py-6">
		        <h1 className="text-3xl font-bold text-center mb-6">My Profile</h1>
		        <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
		          <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
		          <p className="text-lg text-gray-700 mb-2"><strong>Email:</strong> {user.email}</p>
		          <p className="text-lg text-gray-700"><strong>Joined:</strong> {user.joined}</p>
		   <p className="text-lg text-gray-700 mb-2"><strong>Phone:</strong> {user.phone}</p>
		        </div>
		      </div>
		    );
};

export default ProfilePage;
