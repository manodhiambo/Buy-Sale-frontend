import React, { useState } from 'react';

const SellPage = () => {
	  const [product, setProduct] = useState({
		      name: '',
		      description: '',
		      price: '',
		      image: null,
		    });

	  const handleChange = (e) => {
		      const { name, value } = e.target;
		      setProduct({ ...product, [name]: value });
		    };

	  const handleFileChange = (e) => {
		      setProduct({ ...product, image: e.target.files[0] });
		    };

	  const handleSubmit = (e) => {
		      e.preventDefault();

		  // Add API call to upload the product here
		  console.log('Uploading product:', product);
		    };

	  return (
		      <div className="container mx-auto max-w-lg p-6 bg-white rounded-lg shadow-md">
		        <h2 className="text-2xl font-bold mb-4 text-center">Sell Product</h2>
		        <form onSubmit={handleSubmit}>
		          <div className="mb-4">
		            <label className="block text-sm font-medium mb-1">Product Name</label>
		            <input
		              type="text"
		              name="name"
		              value={product.name}
		              onChange={handleChange}
		              className="w-full px-3 py-2 border border-gray-300 rounded-md"
		              placeholder="Enter product name"
		            />
		          </div>
		          <div className="mb-4">
		            <label className="block text-sm font-medium mb-1">Description</label>
		            <textarea
		              name="description"
		              value={product.description}
		              onChange={handleChange}
		              className="w-full px-3 py-2 border border-gray-300 rounded-md"
		              placeholder="Enter product description"
		            ></textarea>
		          </div>
		          <div className="mb-4">
		            <label className="block text-sm font-medium mb-1">Price</label>
		            <input
		              type="number"
		              name="price"
		              value={product.price}
		              onChange={handleChange}
		              className="w-full px-3 py-2 border border-gray-300 rounded-md"
		              placeholder="Enter product price"
		            />
		          </div>
		          <div className="mb-4">
		            <label className="block text-sm font-medium mb-1">Image</label>
		            <input type="file" onChange={handleFileChange} className="w-full" />
		          </div>
		          <button
		            type="submit"
		            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
		          >
		            Upload Product
		          </button>
		        </form>
		      </div>
		    );
};

export default SellPage;
