import React from 'react';

const BuyPage = () => {
	  const products = [
		  { id: 1, name: 'Smartphone', price: 500, image: 'https://via.placeholder.com/150' },
		  { id: 2, name: 'Laptop', price: 1200, image: 'https://via.placeholder.com/150' },
	  ];

	return (
		    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
		      {products.map((product) => (
			              <div key={product.id} className="bg-white border rounded-lg shadow-md p-4">
			                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
			                <h2 className="text-xl font-bold">{product.name}</h2>
			                <p className="text-lg text-gray-700">${product.price}</p>
			                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">Buy Now</button>
			              </div>
			            ))}
		    </div>
		  );
};

export default BuyPage;
