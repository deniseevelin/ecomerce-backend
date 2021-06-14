const vendor = process.env.GATEWAY_NAME;
const gateway = require(`./vendor/${vendor}`);

const interface = {
  getBanksInformation: async () => {
    return gateway.getBanksInformation();
  },
  getCompanyTypes: async () => {
    return gateway.getCompanyTypes();
  },
  getBusinessAreas: async () => {
    return gateway.getBusinessAreas();
  },
  getAccount: async () => {
    return gateway.getAccount();
  },
  getBalance: async () => {
    return gateway.getBalance();
  },
  createAccount: async (data) => {
    return gateway.createAccount(data);
  },
  getRequireDocuments: async () => {
    return gateway.getRequireDocuments();
  },
  getStatusDocuments: async (id) => {
    return gateway.getStatusDocuments(id);
  },
  sendDocuments: async (id, data) => {
    return gateway.sendDocuments(id, data);
  },
  updateAccount: async (data) => {
    return gateway.updateAccount(data);
  },
  getCharges: async () => {
    return gateway.getCharges();
  },
  consultCharge: async (id) => {
    return gateway.consultCharge(id);
  },
  createCharge: async (data) => {
    return gateway.createCharge(data);
  },
  cancelCharge: async (id) => {
    return gateway.cancelCharge(id);
  },
  updateSplit: async (id) => {
    return gateway.updateSplit(id);
  },
  tokenCreditCard: async (hash) => {
    return gateway.tokenCreditCard(hash);
  },
  paymentCharge: async (data) => {
    return gateway.paymentCharge(data);
  },
  refundsPayment: async (id, data) => {
    return gateway.refundsPayment(id, data);
  },
  capturePayment: async (id, data) => {
    return gateway.capturePayment(id, data);
  },
};

module.exports = interface;
