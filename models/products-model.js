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
    required: true
  },
  value: {
    type: Number,
    required: true,
  },
  image: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Products = mongoose.model("Products", ProductSchema);

module.exports = Products;
