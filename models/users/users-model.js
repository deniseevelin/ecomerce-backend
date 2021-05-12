const mongoose = require("../../core/services/database/database");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  document: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    complement: {
      type: String,
    },
    neighborhood: {
      type: String,
    },
    city: {
      type: String,
      require: true,
    },
    state: {
      type: String,
      require: true,
    },
    postCode: {
      type: String,
      require: true,
    },
  },
  secondaryEmail: {
    type: String,
    lowercase: true,
  },
  phone: {
    type: String,
  },
  birthDate:{
    type: String,
  },
  notify: {
    value: false,
    type: Boolean
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
