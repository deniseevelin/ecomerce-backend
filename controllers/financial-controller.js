const interface = require("../core/services/gateway/interface");

const financialControllers = {
  banksInformation: async (req, res, next) => {
    try {
      const banks = await interface.getBanksInformation();
      return res.send(banks);
    } catch (err) {
      return res.status(400).send({ error: "Error find banks!" });
    }
  },
  getCompanyTypes: async (req, res, next) => {
    try {
      const companysType = await interface.getCompanyTypes();
      return res.send(companysType);
    } catch (err) {
      return res.status(400).send({ error: "Error find company types!" });
    }
  },
  getBusinessAreas: async (req, res, next) => {
    try {
      const businessAreas = await interface.getBusinessAreas();
      return res.send(businessAreas);
    } catch (err) {
      return res.status(400).send({ error: "Error find business areas!" });
    }
  },
  getAccount: async (req, res, next) => {
    try {
      const account = await interface.getAccount();
      return res.send(account);
    } catch (err) {
      return res.status(400).send({ error: "Error find accounts!" });
    }
  },
  getBalance: async (req, res, next) => {
    try {
      const balance = await interface.getBalance();
      return res.send(balance);
    } catch (err) {
      return res.status(400).send({ error: "Error find balance!" });
    }
  },
  createAccount: async (req, res, next) => {
    try {
      const data = req.body;
      const create = await interface.createAccount(data);
      return res.send(create);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  getRequireDocuments: async (req, res, next) => {
    try {
      const requireDocuments = await interface.getRequireDocuments();
      return res.send(requireDocuments);
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
      return res.send(statusDocuments);
    } catch (err) {
      return res.status(400).send({ error: "Error finding status documents!" });
    }
  },
  sendDocuments: async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const sendDocuments = await interface.sendDocuments(id, data);
      return res.send(sendDocuments);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  updateAccount: async (req, res, next) => {
    try {
      const data = req.body;
      const update = await interface.sendDocuments(data);
      return res.send(update);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  getCharges: async (req, res, next) => {
    try {
      const charges = await interface.getCharges();
      return res.send(charges);
    } catch (err) {
      return res.status(400).send({ error: "Error find charges!" });
    }
  },
  consultCharge: async (req, res, next) => {
    try {
      const id = req.params.id;
      const consultCharge = await interface.consultCharge(id);
      return res.send(consultCharge);
    } catch (err) {
      return res.status(400).send({ error: "Error find charge!" });
    }
  },
  createCharge: async (req, res, next) => {
    try {
      const data = req.body;
      console.log(data)
      const createCharge = await interface.createCharge(data);
      console.log(createCharge.data)
      return res.send(createCharge);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  cancelCharge: async (req, res, next) => {
    try {
      const id = req.params.id;
      const cancelCharge = await interface.cancelCharge(id);
      return res.send(cancelCharge);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  updateSplit: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updateSplit = await interface.updateSplit(id);
      return res.send(updateSplit);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  tokenCreditCard: async (req, res, next) => {
    try {
      const hash = req.body;
      console.log(req.body);
      const token = await interface.tokenCreditCard(hash);
      return res.send(token);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  paymentCharge: async (req, res, next) => {
    try {
      const data = req.body;
      const payment = await interface.paymentCharge(data);
      res.send(payment);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  refundsPayment: async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const refund = await interface.refundsPayment(id, data);
      res.send(refund);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  capturePayment: async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const capture = await interface.capturePayment(id, data);
      res.send(capture);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
};

module.exports = financialControllers;
