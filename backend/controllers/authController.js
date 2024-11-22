const User = require('../models/User');
const jwt = require('jsonwebtoken');

// User Registration
exports.registerUser = async (req, res) => {
	  const { username, email, password } = req.body;
	  try {
		      let user = await User.findOne({ email });
		      if (user) {
			            return res.status(400).json({ msg: 'User already exists' });
			          }

		      user = new User({ username, email, password });
		      await user.save();

		      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
		      res.status(201).json({ token, user: { id: user._id, username: user.username, email: user.email } });
		    } catch (err) {
			        console.error(err.message);
			        res.status(500).send('Server Error');
			      }
};

// User Login
exports.loginUser = async (req, res) => {
	  const { email, password } = req.body;
	  try {
		      let user = await User.findOne({ email });
		      if (!user) {
			            return res.status(400).json({ msg: 'Invalid credentials' });
			          }

		      const isMatch = await user.matchPassword(password);
		      if (!isMatch) {
			            return res.status(400).json({ msg: 'Invalid credentials' });
			          }

		      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
		      res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
		    } catch (err) {
			        console.error(err.message);
			        res.status(500).send('Server Error');
			      }
};
