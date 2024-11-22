const Product = require('../models/Product');

// Create Product
exports.createProduct = async (req, res) => {
	  const { name, description, price, image } = req.body;

	  try {
		      const product = new Product({
			            name,
			            description,
			            price,
			            image,
			            user: req.user.id,
		      });
		  await product.save();
		      res.status(201).json(product);
		    } catch (err) {
			        console.error(err.message);
			        res.status(500).send('Server Error');
			      }
};

// Get all products
exports.getProducts = async (req, res) => {
	  try {
		      const products = await Product.find().populate('user', 'username');
		      res.json(products);
		    } catch (err) {
			        console.error(err.message);
			        res.status(500).send('Server Error');
			      }
};
