const Product = require("../models/products/products-model");

const productsController = {
  getAllProducts: async (req, res, next) => {
    try {
      const products = await Product.find();
      return res.send(products);
    } catch (err) {
      return res.status(400).send({ error: "Error finding products!" });
    }
  },
  registerProducts: async (req, res, next) => {
    try {
      const product = await Product.create(req.body);
      return res.send(product);
    } catch (err) {
      return res.status(400).send({ error: "Registration product failed" });
    }
  },
};

module.exports = productsController;