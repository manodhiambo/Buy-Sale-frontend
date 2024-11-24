import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
	  return (
		      <div>
		        <h2>Welcome to Your Dashboard</h2>
		        <p>You are now a family, let’s build our country together, feel at home!</p>
		        <nav>
		          <Link to="/dashboard/buy">Buy</Link>
		          <br />
		          <Link to="/dashboard/sell">Sell</Link>
		          <br />
		          <Link to="/dashboard/profile">Profile</Link>
		        </nav>
		      </div>
		    );
};

export default DashboardPage;

