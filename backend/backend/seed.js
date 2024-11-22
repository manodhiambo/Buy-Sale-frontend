const mongoose = require('mongoose');
const Product = require('./models/productModel');
const config = require('./config/config');

mongoose.connect(config.mongoURI, {
	  useNewUrlParser: true,
	  useUnifiedTopology: true,
});

const seedProducts = async () => {
	  await Product.deleteMany();
	await Product.insertMany([
		    { name: 'Product 1', description: 'Description 1', price: 100 },
		    { name: 'Product 2', description: 'Description 2', price: 200 },
		  ]);
	  console.log('Products seeded successfully.');
	  process.exit();
};

seedProducts();
