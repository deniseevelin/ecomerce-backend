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
};

module.exports = interface;
