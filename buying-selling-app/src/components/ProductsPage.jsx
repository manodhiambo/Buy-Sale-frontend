import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

const ProductsPage = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchedProducts = [
			{ id: 1, name: 'Smartphone', description: 'Latest model', price: 899, image: 'https://via.placeholder.com/150' },
			{ id: 2, name: 'Laptop', description: 'High performance', price: 1200, image: 'https://via.placeholder.com/150' },
			{ id: 3, name: 'Headphones', description: 'Noise cancelling', price: 200, image: 'https://via.placeholder.com/150' },

		];
		    setProducts(fetchedProducts);
		  }, []);

	  return (
		      <div className="container mx-auto p-6">
		        <h1 className="text-3xl font-bold mb-6">Available Products</h1>
		        <ProductList products={products} />
		      </div>
		    );
};

export default ProductsPage;

