const User = require("../models/userModel");

exports.addToCart = async (req, res) => {
  const user = await User.findById(req.user.id);
  user.cartData[req.body.itemId] += 1;
  await user.save();
  res.send("Added");
};

exports.removeFromCart = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (user.cartData[req.body.itemId] > 0) {
    user.cartData[req.body.itemId] -= 1;
    await user.save();
  }
  res.send("Removed");
};

exports.getCart = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user.cartData);
};
