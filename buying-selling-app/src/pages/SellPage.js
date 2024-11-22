import React, { useState } from 'react';

const SellPage = () => {
	  const [productName, setProductName] = useState('');
	  const [productDescription, setProductDescription] = useState('');
	  const [productPrice, setProductPrice] = useState('');
	  const [productImage, setProductImage] = useState(null);
	  const [previewImage, setPreviewImage] = useState('');
	  const [successMessage, setSuccessMessage] = useState('');
	  const [errorMessage, setErrorMessage] = useState('');

	  const handleImageUpload = (e) => {
		      const file = e.target.files[0];
		      if (file) {
			            setProductImage(file);
			            setPreviewImage(URL.createObjectURL(file));
			          }
		    };

	  const handleSubmit = async (e) => {
		  e.preventDefault();
		  if (!productName || !productDescription || !productPrice || !productImage) {
			  setErrorMessage('All fields are required.');
			            return;
		      }

		  // Simulating an API call to upload the product
		  try {
			        const formData = new FormData();
			        formData.append('name', productName);
			        formData.append('description', productDescription);
			        formData.append('price', productPrice);
			        formData.append('image', productImage);

			   // Simulate a successful response
			  console.log('Uploading product:', {
				          name: productName,
				          description: productDescription,
				          price: productPrice,
				          image: productImage,
				        });

			  // Clear form on success
			  setProductName('');
			        setProductDescription('');
			        setProductPrice('');
			        setProductImage(null);
			        setPreviewImage('');
			        setErrorMessage('');
			        setSuccessMessage('Product uploaded successfully!');
			      } catch (error) {
				            setErrorMessage('Failed to upload the product. Please try again.');
				          }
		    };

	  return (
		      <div className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
		        <h2 className="text-2xl font-bold mb-4">Sell a Product</h2>
		        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
		        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
		        <form onSubmit={handleSubmit}>
		          <div className="mb-4">
		            <label className="block text-sm font-medium">Product Name</label>
		            <input
		              type="text"
		              value={productName}
		              onChange={(e) => setProductName(e.target.value)}
		              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
		              placeholder="Enter product name"
		              required
		            />
		          </div>
		          <div className="mb-4">
		            <label className="block text-sm font-medium">Description</label>
		            <textarea
		              value={productDescription}
		              onChange={(e) => setProductDescription(e.target.value)}
		              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
		              placeholder="Enter product description"
		              rows="4"
		              required
		            ></textarea>
		          </div>
		          <div className="mb-4">
		            <label className="block text-sm font-medium">Price (in USD)</label>
		            <input
		              type="number"
		              value={productPrice}
		              onChange={(e) => setProductPrice(e.target.value)}
		              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
		              placeholder="Enter product price"
		              required
		            />
		          </div>
		          <div className="mb-4">
		            <label className="block text-sm font-medium">Product Image</label>
		            <input
		              type="file"
		              accept="image/*"
		              onChange={handleImageUpload}
		              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
		              required
		            />
		            {previewImage && (
				                <div className="mt-4">
				                  <p className="text-sm text-gray-600">Preview:</p>
				                  <img
				                    src={previewImage}
				                    alt="Product Preview"
				                    className="w-full h-48 object-cover mt-2 rounded-lg border border-gray-300"
				                  />
				                </div>
				              )}
		          </div>
		          <button
		            type="submit"
		            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
		          >
		            Upload Product
		          </button>
		        </form>
		      </div>
		    );
};

export default SellPage;

