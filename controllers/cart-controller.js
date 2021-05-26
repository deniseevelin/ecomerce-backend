const Cart = require("../models/users/cart-model");

const cartController = {
  getCartById: async (req, res, next) => {
    const {cartid} = req.params;
    try {
      const cart = await Cart.findById(cartid);
      return res.send(cart);
    } catch (err) {
      return res.status(400).send({ error: "Error finding cart!" });
    }
  },
  createCart: async (req, res, next) => {
    const data = req.body;
    const { userid } = req.params;
    try {
      const newCart = await Cart.create({...data, user: userid});
      await newCart.populate("products")
      return res.send(newCart);
    } catch (err) {
      return res.status(400).send({ error: "Creation cart failed" });
    }
  },
  updateCart: async (req, res, next) => {
    const data = req.body.products;
    const { userid, cartid } = req.params;

    try {
      const upCart = await Cart.findByIdAndUpdate(products.push(data), userid, cartid);
      return res.send(upCart);
    } catch (err) {
      return res.status(400).send({ error: "Update cart failed" });
    }
  }
}

module.exports = cartController;
