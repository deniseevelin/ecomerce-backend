const interface = require("../core/services/gateway/interface");
const Card = require("../models/cards-model");
const User = require("../models/users-model");

const financialControllers = {
  banksInformation: async (req, res, next) => {
    try {
      const banks = await interface.getBanksInformation();
      return res.json(banks);
    } catch (err) {
      return res.status(400).send({ error: "Error find banks!" });
    }
  },
  getCompanyTypes: async (req, res, next) => {
    try {
      const companysType = await interface.getCompanyTypes();
      return res.json(companysType);
    } catch (err) {
      return res.status(400).send({ error: "Error find company types!" });
    }
  },
  getBusinessAreas: async (req, res, next) => {
    try {
      const businessAreas = await interface.getBusinessAreas();
      return res.json(businessAreas);
    } catch (err) {
      return res.status(400).send({ error: "Error find business areas!" });
    }
  },
  getAccount: async (req, res, next) => {
    try {
      const account = await interface.getAccount();
      return res.json(account);
    } catch (err) {
      return res.status(400).send({ error: "Error find accounts!" });
    }
  },
  getBalance: async (req, res, next) => {
    try {
      const balance = await interface.getBalance();
      return res.json(balance);
    } catch (err) {
      return res.status(400).send({ error: "Error find balance!" });
    }
  },
  createAccount: async (req, res, next) => {
    try {
      const data = req.body;
      const create = await interface.createAccount(data);
      return res.json(create);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  getRequireDocuments: async (req, res, next) => {
    try {
      const requireDocuments = await interface.getRequireDocuments();
      return res.json(requireDocuments);
    } catch (err) {
      return res
        .status(400)
        .send({ error: "Error finding necessary documents to send!" });
    }
  },
  getStatusDocuments: async (req, res, next) => {
    try {
      const id = req.params.id;
      const statusDocuments = await interface.getStatusDocuments(id);
      return res.json(statusDocuments);
    } catch (err) {
      return res.status(400).send({ error: "Error finding status documents!" });
    }
  },
  sendDocuments: async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const sendDocuments = await interface.sendDocuments(id, data);
      return res.json(sendDocuments);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  updateAccount: async (req, res, next) => {
    try {
      const data = req.body;
      const update = await interface.sendDocuments(data);
      return res.json(update);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  getCharges: async (req, res, next) => {
    try {
      const charges = await interface.getCharges();
      return res.json(charges);
    } catch (err) {
      return res.status(400).send({ error: "Error find charges!" });
    }
  },
  consultCharge: async (req, res, next) => {
    try {
      const id = req.params.id;
      const consultCharge = await interface.consultCharge(id);
      return res.json(consultCharge.data);
    } catch (err) {
      return res.status(400).send({ error: "Error find charge!" });
    }
  },
  createCharge: async (req, res, next) => {
    try {
      const data = req.body;
      const createCharge = await interface.createCharge(data);
      const dataCharge = createCharge.data._embedded.charges;
      const saveCharge = await User.findByIdAndUpdate(
        req.userId,
        {
          "$push": {
            charge: dataCharge,
          },
        },
        {
          new: true,
        }
      );
      return res.json(createCharge.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  cancelCharge: async (req, res, next) => {
    try {
      const id = req.params.id;
      const cancelCharge = await interface.cancelCharge(id);
      return res.json(cancelCharge);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  updateSplit: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updateSplit = await interface.updateSplit(id);
      return res.json(updateSplit);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  tokenCreditCard: async (req, res, next) => {
    try {
      const hash = req.body;
      const token = await interface.tokenCreditCard(hash);
      const card = await Card.create({
        number: token.last4CardNumber,
        expirationMonth: token.expirationMonth,
        expirationYear: token.expirationYear,
        token: token.creditCardId,
      });
      const saveCard = await User.findByIdAndUpdate(
        req.userId,
        {
          "$push": {
            cards: card,
          },
        },
        {
          new: true,
        }
      );
      return res.json(saveCard);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  paymentCharge: async (req, res, next) => {
    try {
      const data = req.body;
      const payment = await interface.paymentCharge(data);
      res.json(payment);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  refundsPayment: async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const refund = await interface.refundsPayment(id, data);
      res.json(refund);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  capturePayment: async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const capture = await interface.capturePayment(id, data);
      res.json(capture);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
};

module.exports = financialControllers;
