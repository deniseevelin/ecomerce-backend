const Product = require("../models/products-model");

const productsController = {
  list: async (req, res, next) => {
    try {
      const products = await Product.find();
      if (!products) throw new Error("E001");
      return res.send(products);
    } catch (e) {
      next(e);
    }
  },
  product: async (req, res, next) => {
    const { id } = req.params;
    try {
      const product = await Product.findById(id);
      if (!product) throw new Error("E002");
      return res.send(product);
    } catch (e) {
      next(e);
    }
  },
  register: async (req, res, next) => {
    try {
      const product = await Product.create(req.body);
      if (!product) throw new Error("E003");
      return res.send(product);
    } catch (e) {
      next(e);
    }
  },
  update: async (req, res, next) => {
    const data = req.body;
    const { id } = req.params;
    if (!id) throw new Error("E004");
    try {
      const upProduct = await Product.findByIdAndUpdate(id, data);
      if (!upProduct) throw new Error("E005");
      return res.send(upProduct);
    } catch (e) {
      next(e);
    }
  },
  remove: async (req, res, next) => {
    const { id } = req.params;
    if (!id) throw new Error("E004");
    try {
      const deleteProduct = await Product.findByIdAndDelete(id);
      return res.send({ message: `Success delete product` });
    } catch (e) {
      next(e);
    }
  },
};

module.exports = productsController;
