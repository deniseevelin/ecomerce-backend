const mongoose = require("../core/services/database/database");

const CardSchema = new mongoose.Schema({
  number: {
    type: String,
  },
  expirationMonth: {
    type: Number,
  },
  expirationYear: {
    type: Number,
  },
  token: {
    type: String,
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
    type: String,
  },
});

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
