import React, { useState } from "react";
import axios from "../api/apiService";


const SellPage = () => {
	  const [itemName, setItemName] = useState("");
	  const [category, setCategory] = useState("");
	  const [description, setDescription] = useState("");
	  const [price, setPrice] = useState("");

	const handleSell = async (e) => {
		  e.preventDefault();
		  try {
			      const newProduct = { name: itemName, category, description, price };
			      await axios.post("/products", newProduct);
			      alert("Product added successfully!");
			    } catch (error) {
				        console.error(error.response.data);
				        alert("Failed to add product.");
				      }
	};

	  return (
		      <div>
		        <h2>Sell an Item</h2>
		        <form onSubmit={handleSell}>
		          <div>
		            <label>Item Name:</label>
		            <input
		              type="text"
		              value={itemName}
		              onChange={(e) => setItemName(e.target.value)}
		            />
		          </div>
		          <div>
		            <label>Category:</label>
		            <select value={category} onChange={(e) => setCategory(e.target.value)}>
		              <option value="">Select Category</option>
		              <option value="Electronics">Electronics</option>
		              <option value="Fashion">Fashion</option>
		              <option value="Home">Home</option>
		              <option value="Books">Books</option>
		            </select>
		          </div>
		          <div>
		            <label>Description:</label>
		            <textarea
		              value={description}
		              onChange={(e) => setDescription(e.target.value)}
		            />
		          </div>
		          <div>
		            <label>Price:</label>
		            <input
		              type="number"
		              value={price}
		              onChange={(e) => setPrice(e.target.value)}
		            />
		          </div>
		          <button type="submit">Submit</button>
		        </form>
		      </div>
		    );
};

export default SellPage;

