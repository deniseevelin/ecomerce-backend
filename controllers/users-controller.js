const User = require("../models/users/users-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

function generateToken(params = {}) {
 return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

const usersController = {
  getAllUsers: async (req, res, next) => {
    try {
      const users = await User.find();
      return res.send(users);
    } catch (err) {
      return res.status(400).send({ error: "Error finding users!" });
    }
  },

  registerUser: async (req, res, next) => {
    const { email } = req.body;

    try {
      if (await User.findOne({ email }))
        return res.status(400).send({ error: "User email already exists" });

      const user = await User.create(req.body);
      user.password = undefined;
      return res.send({ user, token: generateToken({id: user.id}) });
    } catch (err) {
      return res.status(400).send({ error: "Registration failed" });
    }
  },

  userAuthentication: async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) return res.status(400).send({ error: "User not found" });

    if (!(await bcrypt.compare(password, user.password)))
      return res.status(400).send({ error: "Invalid password" });

    user.password = undefined;

  res.send({ user, token: generateToken({id: user.id}) });
  },
};

module.exports = usersController;
