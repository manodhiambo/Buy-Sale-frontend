import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import DashboardPage from "./components/DashboardPage";
import BuyPage from "./components/BuyPage";
import SellPage from "./components/SellPage";
import ProfilePage from "./components/ProfilePage";

function App() {
	  return (
		      <Router>
		        <div className="App">
		          <Routes>
		            <Route path="/" element={<HomePage />} />
		            <Route path="/login" element={<LoginPage />} />
		            <Route path="/register" element={<RegisterPage />} />
		            <Route path="/dashboard" element={<DashboardPage />} />
		            <Route path="/dashboard/buy" element={<BuyPage />} />
		            <Route path="/dashboard/sell" element={<SellPage />} />
		            <Route path="/dashboard/profile" element={<ProfilePage />} />
		          </Routes>
		        </div>
		      </Router>
		    );
}

export default App;
