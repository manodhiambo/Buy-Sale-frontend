import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import SellPage from './pages/SellPage';
import BuyPage from './pages/BuyPage';

function App() {
	  return (
		      <Router>
		        <Routes>
		          {/* Public Routes */}
		          <Route path="/" element={<HomePage />} />
		          <Route path="/register" element={<RegisterPage />} />
		          <Route path="/login" element={<LoginPage />} />
		          
		          {/* Protected Routes (Only accessible after logging in) */}
		          <Route path="/dashboard" element={<DashboardPage />} />
		          <Route path="/profile" element={<ProfilePage />} />
		          <Route path="/sell" element={<SellPage />} />
		          <Route path="/buy" element={<BuyPage />} />
		        </Routes>
		      </Router>
		    );
}

export default App;

