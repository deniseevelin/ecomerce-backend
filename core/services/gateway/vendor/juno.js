const axios = require("axios");
// process.env["DEBUG"] = "axios";
// const debug = require('axios-debug-log');
const version = process.env.X_API_VERSION;
const token = process.env.X_RESOURCE_TOKEN;
const url = process.env.BASE_URL;

const juno = async (method, endpoint, data = {}, config = {}) => {
  const instance = await axios.create({
    baseURL: url,
    headers: {
      "X-Api-Version": version,
      "X-Resource-Token": token,
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJkZW5pc2Uuc2lsdmFAbGlua2FwaS5jb20uYnIiLCJzY29wZSI6WyJhbGwiXSwiZXhwIjoxNjI0MDU5MjExLCJqdGkiOiJNdnlXTDZYUVdtR1RTNWFvT0ptN1E5NTBaVGciLCJjbGllbnRfaWQiOiJSSmVXcDY5aUxBaXBpdEl0In0.bwfRtmdbBGAoHL7MMfmaz6WOmxN63wiqqcxsc4LccQNIexbayZoxqGNcoBbAZTFXD7DpofhAwfLtXPRS--vALoWTJZeVlu9XcxfFWySrNxyr1bMjx6oaOeZQQ99T8kTSXZTWXuCYjE9ewJTgHAs12IxVylnV79SCx8h3jdJRQcg6Ynfufj8tE0D8F0nAMw05z82xeu9Gt3imtsVHVmrctZ-CV06f8sMio4x8XdFbyCg2779RIZoHtyvvpjU_sG3I7hPdmeX5A0X8KUs4lzVSB9W3Mjb6_paDclk3bon6QVMEoVNoRqXI4DD2U7ZBovdKRKoKa2CWyXgcvnUQv_MqBw",
    },
  });

  let request;
  switch (method) {
    case "get":
      request = instance.get;
      break;
    case "post":
      request = instance.post;
      break;
    case "put":
      request = instance.put;
      break;
    case "patch":
      request = instance.patch;
      break;
    case "delete":
      request = instance.delete;
      break;
    default:
      request = instance.get;
  }
  return request(endpoint, data, config).catch((error) => {
    console.log(error.response.data);
  });
};

const junoInterface = {
  getBanksInformation: async () => {
    try {
      const banks = await juno("get", "/data/banks");
      return banks.data;
    } catch (err) {
      return err;
    }
  },
  getCompanyTypes: async () => {
    try {
      const companysType = await juno("get", "/data/company-types");
      return companysType.data;
    } catch (err) {
      return err;
    }
  },
  getBusinessAreas: async () => {
    try {
      const businessAreas = await juno("get", "/data/business-areas");
      return businessAreas.data;
    } catch (err) {
      return err;
    }
  },
  getAccount: async () => {
    try {
      const account = await juno("get", "/digital-accounts");
      console.log(account);
      return account.data;
    } catch (err) {
      return err;
    }
  },
  getBalance: async () => {
    try {
      const balance = await juno("get", "/balance");
      return balance.data;
    } catch (err) {
      return err;
    }
  },
  createAccount: async (data) => {
    try {
      const create = await juno("post", "/digital-accounts", data);
      return create.data;
    } catch (err) {
      return err;
    }
  },
  getRequireDocuments: async () => {
    try {
      const requireDocuments = await juno("get", "/documents");
      return requireDocuments.data;
    } catch (err) {
      return err;
    }
  },
  getStatusDocuments: async (id) => {
    try {
      const statusDocuments = await juno("get", `/documents/${id}`);
      return statusDocuments.data;
    } catch (err) {
      return err;
    }
  },
  sendDocuments: async (id, data) => {
    try {
      const sendDocuments = await juno("post", `/documents/${id}/files`, data);
      return sendDocuments.data;
    } catch (err) {
      return err;
    }
  },
  updateAccount: async (data) => {
    try {
      const update = await juno("patch", "/digital-accounts", data);
      return update.data;
    } catch (err) {
      return err;
    }
  },
  getCharges: async () => {
    try {
      const charges = await juno("get", "/charges");
      return charges.data;
    } catch (err) {
      return err;
    }
  },
  consultCharge: async (id) => {
    try {
      const consultCharge = await juno("get", `/charges/${id}`);
      return consultCharge.data;
    } catch (err) {
      return err;
    }
  },
  createCharge: async (data) => {
    try {
      const createCharge = await juno("post", "/charges", data);
      return createCharge;
    } catch (err) {
      return err;
    }
  },
  cancelCharge: async (id) => {
    try {
      const cancelCharge = await juno("put", `/charges/${id}/cancelation`);
      return cancelCharge.data;
    } catch (err) {
      return err;
    }
  },
  updateSplit: async (id) => {
    try {
      const updateSplit = await juno("put", `/charges/${id}/split`);
      return updateSplit.data;
    } catch (err) {
      return err;
    }
  },
  tokenCreditCard: async (data) => {
    try {
      const token = await juno("post", "/credit-cards/tokenization", data);
      return token.data;
    } catch (err) {
      return err;
    }
  },
  paymentCharge: async (data) => {
    try {
      const payment = await juno("post", "/payments", data);
      return payment.data;
    } catch (err) {
      return err;
    }
  },
  refundsPayment: async (id, data) => {
    try {
      const refund = await juno("post", `/payments/${id}/refunds`, data);
      return refund.data;
    } catch (err) {
      return err;
    }
  },
  capturePayment: async (id, data) => {
    try {
      const capture = await juno("post", `/payments/${id}/capture`, data);
      return capture.data;
    } catch (err) {
      return err;
    }
  },
};

module.exports = junoInterface;
