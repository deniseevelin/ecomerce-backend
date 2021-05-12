const mongoose = require("../../core/services/database/database");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  value: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Products = mongoose.model("Products", ProductSchema);

module.exports = Products;