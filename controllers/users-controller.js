const User = require("../models/users-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");
const emailService = require("../core/services/email/interface");
const { stringify } = require("flatted");

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
  getUserById: async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      return res.send(user);
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
      console.log(user)
      user.password = undefined;
      return res.send({ user, token: generateToken({ id: user.id }) });
    } catch (err) {
      return res.status(400).send({ error: "Registration failed" });
    }
  },
  updateUser: async (req, res, next) => {
    const { id } = req.params;
    const {email, document} = req.body;
    try {
      if (await User.findOne({email}))
        return res.status(400).send({ error: "User email already exists" });

        if (await User.findOne({document}))
        return res.status(400).send({ error: "User document already exists" });

      const user = await User.findByIdAndUpdate(id, req.body)
      user.password = undefined;
      return res.send({ user, token: generateToken({ id: user.id }) });
    } catch (err) {
      return res.status(400).send({ error: "Registration failed" });
    }
  },
  testEmailSend: async (req, res, next) => {
    try {
      const data = {
        personalizations: [
          {
            to: [
              {
                name: "Denise",
                email: "denise.silva@linkapi.com.br",
              },
            ],
            dynamic_template_data: {
              name: "Denise",
              link: "https://google.com",
              subject: "Bem vindo!!!!!",
            },
            subject: null,
          },
        ],
      };
      const email = await emailService(
        "d-a05fa04d1ee44ccb943849be2c8749df",
        data
      );
      return res.status(200).json(JSON.parse(stringify(email)));
    } catch (err) {
      return res.status(400).send(err.stack);
    }
  },

  userAuthentication: async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) return res.status(400).send({ error: "User not found" });

    if (!(await bcrypt.compare(password, user.password)))
      return res.status(400).send({ error: "Invalid password" });

    user.password = undefined;

    res.send({ user, token: generateToken({ id: user.id }) });
  },
};

module.exports = usersController;
