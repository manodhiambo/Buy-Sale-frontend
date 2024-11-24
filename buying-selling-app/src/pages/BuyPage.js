import React, { useState, useEffect } from "react";
import axios from "../api/apiService";

const BuyPage = () => {
	  const [searchQuery, setSearchQuery] = useState("");
	  const [products, setProducts] = useState([]);

	  useEffect(() => {
		  axios.get("/products").then((res) => {
			        setProducts(res.data);
			      });
		    }, []);

	const handleSearch = async (e) => {
		  e.preventDefault();
		  try {
			      const res = await axios.get(`/products?search=${searchQuery}`);
			      setProducts(res.data);
			    } catch (error) {
				        console.error(error.response.data);
				        alert("Failed to search for products.");
				      }
	};

	  return (
		      <div>
		        <h2>Buy Items</h2>
		        <form onSubmit={handleSearch}>
		          <input
		            type="text"
		            placeholder="Search for an item..."
		            value={searchQuery}
		            onChange={(e) => setSearchQuery(e.target.value)}
		          />
		          <button type="submit">Search</button>
		        </form>
		        <div>
		          <h3>Available Products</h3>
		          {products.map((product) => (
				            <div key={product.id}>
				              <h4>{product.name}</h4>
				              <p>{product.description}</p>
				              <p>Price: ${product.price}</p>
				            </div>
				          ))}
		        </div>
		      </div>
		    );
};

export default BuyPage;
