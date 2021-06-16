const mongoose = require("../core/services/database/database");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  charge: [{
    type: Object
  }],
  cards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Card"
  }],
  name: {
    type: String,
    require: true,
  },
  document: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    lowercase: true,
  },
  address: {
    street: {
      type: String,
    },
    number: {
      type: String,
    },
    complement: {
      type: String,
    },
    neighborhood: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    postCode: {
      type: String,
    },
  },
  phone: {
    type: String,
  },
  birthDate: {
    type: String,
  },
  notify: {
    value: false,
    type: Boolean,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  admin: {
    type: Boolean,
    default: false,
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

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
