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
  getProductById: async (req, res, next) => {
    const {id} = req.params;
    try {
      const product = await Product.findById(id);
      return res.send(product);
    } catch (err) {
      return res.status(400).send({ error: "Error finding product!" });
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
  updateProduct: async (req, res, next) => {
    const data = req.body;
    const {id} = req.params;

    try {
      const upProduct = await Product.findByIdAndUpdate(id, data);
      return res.send(upProduct);
    } catch (err) {
      return res.status(400).send({ error: "Updating product failed" });
    }
  },
  removeProduct: async (req, res, next) => {
    const {id} = req.params;

    try {
      const deleteProduct = await Product.findByIdAndDelete(id);
      return res.send({message: `Success delete product`});
    } catch (err) {
      return res.status(400).send({ error: "Delete product failed" });
    }
  }
};

module.exports = productsController;