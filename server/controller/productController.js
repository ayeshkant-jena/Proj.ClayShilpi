const Product = require("../models/productModel");

exports.addProduct = async (req, res) => {
  const products = await Product.find({});
  const id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

  const product = new Product({ ...req.body, id });
  await product.save();

  res.json({ success: true, name: req.body.name });
};

exports.removeProduct = async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  res.json({ success: true });
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.send(products);
};

exports.getNewCollections = async (req, res) => {
  const products = await Product.find({});
  res.send(products.slice(-8));
};

exports.getPopularIdols = async (req, res) => {
  const products = await Product.find({ category: "idol" });
  res.send(products.slice(0, 4));
};
