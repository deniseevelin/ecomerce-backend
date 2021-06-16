const mongoose = require("../core/services/database/database");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    require: true
  },
  price: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
    default: "placeholder.png"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
  deletedAt: {
    type: Date,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const Products = mongoose.model("Products", ProductSchema);

module.exports = Products;
