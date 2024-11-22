const express = require('express');
const router = express.Router();
const { createProduct, getProducts } = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

// Protect routes with authentication middleware
router.post('/', authMiddleware, createProduct);
router.get('/', getProducts);

module.exports = router;

