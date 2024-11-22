import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/apiService';

const ProductsPage = () => {
	  const [products, setProducts] = useState([]);
	  const [error, setError] = useState(null);

	  useEffect(() => {
		      const loadProducts = async () => {
			            try {
					            const products = await fetchProducts();
					            setProducts(products);
					          } catch (err) {
							          setError(err.message);
							        }
			          };

		      loadProducts();
		    }, []);

	  if (error) {
		      return <p>Error: {error}</p>;
		    }

	  return (
		      <div>
		        <h1>Products</h1>
		        <ul>
		          {products.map((product) => (
				            <li key={product.id}>{product.name}</li>
				          ))}
		        </ul>
		      </div>
		    );
};

export default ProductsPage;

