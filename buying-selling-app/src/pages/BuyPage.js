import React, { useState, useEffect } from 'react';

const BuyPage = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	// Fetch products from an API or mock data
	useEffect(() => {
		    const fetchProducts = async () => {
			          try {
					  // Simulate an API call
					  const response = await new Promise((resolve) =>
						  setTimeout(
							  () =>
							  resolve([
								  {
									  id: 1,
									  name: 'Smartphone',
									  description: 'A high-end smartphone with amazing features.',
									  price: 999,
									  image: 'https://via.placeholder.com/150',
									  },
								  {
									  id: 2,
									  name: 'Laptop',
									  description: 'A powerful laptop for work and gaming.',
									  price: 1299,
									  image: 'https://via.placeholder.com/150',
								  },
								  {
									  id: 3,
									  name: 'Headphones',
									  description: 'Noise-cancelling headphones for an immersive experience.',
									  price: 199,
									  image: 'https://via.placeholder.com/150',
								  },
								  {
									  id: 4,
									  name: 'Smartwatch',
									  description: 'A sleek smartwatch to keep you connected.',
									  price: 299,
									  image: 'https://via.placeholder.com/150',
								  },
								   ]),
							  1000
						  )
					  );
					  setProducts(response);
					          setLoading(false);
					        } catch (err) {
							        setError('Failed to load products. Please try again later.');
							        setLoading(false);
							      }
			        };

		    fetchProducts();
		  }, []);

	  return (
		      <div className="max-w-7xl mx-auto p-6">
		        <h1 className="text-3xl font-bold text-center mb-6">Buy Products</h1>
		        {loading && <p className="text-center text-gray-600">Loading products...</p>}
		        {error && <p className="text-center text-red-500">{error}</p>}
		        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
		          {products.map((product) => (
				            <div
				              key={product.id}
				              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
				            >
				              <img
				                src={product.image}
				                alt={product.name}
				                className="w-full h-48 object-cover rounded-t-lg"
				              />
				              <div className="p-4">
				                <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
				                <p className="text-sm text-gray-600">{product.description}</p>
				                <p className="mt-2 text-xl font-bold text-gray-900">${product.price}</p>
				                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
				                  Buy Now
				                </button>
				              </div>
				            </div>
				          ))}
		        </div>
		        {!loading && products.length === 0 && (
				        <p className="text-center text-gray-600">No products available at the moment.</p>
				      )}
		      </div>
		    );
};

export default BuyPage;
