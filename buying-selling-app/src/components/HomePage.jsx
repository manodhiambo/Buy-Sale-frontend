import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
	  return (
		      <div style={{ textAlign: "center", marginTop: "20px" }}>
		        <h1>Welcome to the trading platform</h1>
		        <p>Your satisfaction, our priority.</p>
		        <div>
		          <Link to="/login">Existing User: Login</Link>
		          <br />
		          <Link to="/register">New User: Register</Link>
		        </div>
		        <img
		          src="https://sl.bing.net/hxXUNDmdHtA"
		          alt="Platform Banner"
		          style={{ width: "100%", marginTop: "20px" }}
		        />
		      </div>
		    );
};

export default HomePage;

