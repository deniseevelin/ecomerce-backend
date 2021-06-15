const vendor = process.env.GATEWAY_NAME;
const gateway = require(`./vendor/${vendor}`);

const interface = {
  getBanksInformation: async () => {
    return await gateway.getBanksInformation();
  },
  getCompanyTypes: async () => {
    return await gateway.getCompanyTypes();
  },
  getBusinessAreas: async () => {
    return await gateway.getBusinessAreas();
  },
  getAccount: async () => {
    return await gateway.getAccount();
  },
  getBalance: async () => {
    return await gateway.getBalance();
  },
  createAccount: async (data) => {
    return await gateway.createAccount(data);
  },
  getRequireDocuments: async () => {
    return await gateway.getRequireDocuments();
  },
  getStatusDocuments: async (id) => {
    return await gateway.getStatusDocuments(id);
  },
  sendDocuments: async (id, data) => {
    return await gateway.sendDocuments(id, data);
  },
  updateAccount: async (data) => {
    return await gateway.updateAccount(data);
  },
  getCharges: async () => {
    return await gateway.getCharges();
  },
  consultCharge: async (id) => {
    return await gateway.consultCharge(id);
  },
  createCharge: async (data) => {
    return await gateway.createCharge(data);
  },
  cancelCharge: async (id) => {
    return await gateway.cancelCharge(id);
  },
  updateSplit: async (id) => {
    return await gateway.updateSplit(id);
  },
  tokenCreditCard: async (hash) => {
    return await gateway.tokenCreditCard(hash);
  },
  paymentCharge: async (data) => {
    return await gateway.paymentCharge(data);
  },
  refundsPayment: async (id, data) => {
    return await gateway.refundsPayment(id, data);
  },
  capturePayment: async (id, data) => {
    return await gateway.capturePayment(id, data);
  },
};

module.exports = interface;
