import React from 'react';

const ProductList = ({ products }) => {
	  return (
		      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
		        {products.map((product) => (
				        <div
				          key={product.id}
				          className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden"
				        >
				          <img
				            src={product.image}
				            alt={product.name}
				            className="w-full h-48 object-cover"
				          />
				          <div className="p-4">
				            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
				            <p className="text-sm text-gray-600">{product.description}</p>
				            <p className="mt-2 text-xl font-bold text-gray-900">${product.price}</p>
				            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
				              Buy Now
				            </button>
				          </div>
				        </div>
				      ))}
		      </div>
		    );
};

export default ProductList;
