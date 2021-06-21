const User = require("../models/users-model");
const Card = require("../models/cards-model");
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
  list: async (req, res, next) => {
    try {
      const users = await User.find();
      if (!users) throw new Error("E006");
      return res.send(users);
    } catch (e) {
      next(e);
    }
  },
  user: async (req, res, next) => {
    const { id } = req.params;
    if (!id) throw new Error("E007");
    try {
      const user = await User.findById(id);
      if (!user) throw new Error("E008");
      return res.send(user);
    } catch (e) {
      next(e);
    }
  },
  card: async (req, res, next) => {
    const { id } = req.params;
    if (!id) throw new Error("E007");
    try {
      const user = await User.findById(id);
      if (!user) throw new Error("E008");
      const cards = user.cards;
      if (!cards) throw new Error("E009");
      for (card of cards) {
        idCard = card;
      }
      const getCard = await Card.findById(idCard);
      return res.send(getCard);
    } catch (e) {
      next(e);
    }
  },
  register: async (req, res, next) => {
    const { email } = req.body;
    try {
      if (await User.findOne({ email })) throw new Error("E010");

      const user = await User.create(req.body);
      if (!user) throw new Error("E011");
      user.password = undefined;
      return res.send({ user, token: generateToken({ id: user.id }) });
    } catch (e) {
      next(e);
    }
  },
  update: async (req, res, next) => {
    const { id } = req.params;
    if (!id) throw new Error("E007");
    try {
      const user = await User.findByIdAndUpdate(id, req.body);
      if (!user) throw new Error("E012");
      user.password = undefined;
      return res.send({ user, token: generateToken({ id: user.id }) });
    } catch (e) {
      next(e);
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

  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email }).select("+password");

      if (!user) throw new Error("E008");

      if (!(await bcrypt.compare(password, user.password)))
        throw new Error("E013");

      user.password = undefined;
      res.send({ user, token: generateToken({ id: user.id }) });
    } catch (e) {
      next(e);
    }
  },

  remove: async (req, res, next) => {
    const { id } = req.params;
    if (!id) throw new Error("E007");
    try {
      const remove = await Product.findByIdAndDelete(id);
      return res.send({ message: `Success delete user` });
    } catch (e) {
      nexte(e)
    }
  },
};

module.exports = usersController;
