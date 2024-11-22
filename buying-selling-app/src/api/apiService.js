const API_BASE_URL = 'http://localhost:5000/api';

export const fetchProducts = async () => {
	  const response = await fetch(`${API_BASE_URL}/products`);
	  if (!response.ok) {
		      throw new Error('Failed to fetch products');
		    }
	  return response.json();
};

export const createProduct = async (productData) => {
	  const response = await fetch(`${API_BASE_URL}/products`, {
		      method: 'POST',
		      headers: {
			            'Content-Type': 'application/json',
			          },
		      body: JSON.stringify(productData),
		    });
	  if (!response.ok) {
		      throw new Error('Failed to create product');
		    }
	  return response.json();
};
