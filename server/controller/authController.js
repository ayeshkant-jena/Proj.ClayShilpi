const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  let existing = await User.findOne({ email });

  if (existing) {
    return res.status(400).json({ success: false, error: "User already exists" });
  }

  let cart = {};
  for (let i = 0; i < 300; i++) cart[i] = 0;

  const user = new User({ name: req.body.username, email: req.body.email, password: req.body.password, cartData: cart });
  await user.save();

  const token = jwt.sign({ user: { id: user._id } },process.env.JWT_SECRET);
  res.json({ success: true, token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && user.password === password) {
    const token = jwt.sign({ user: { id: user._id } },process.env.JWT_SECRET);
    res.json({ success: true, token });
  } else {
    res.json({ success: false, error: "Invalid email or password" });
  }
};
