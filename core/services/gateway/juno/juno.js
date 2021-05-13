const axios = require("axios");

const juno = async (method, endpoint, data = {}, config = {}) => {
  const instance = await axios.create({
    baseURL: "https://sandbox.boletobancario.com/api-integration",
    headers: {
      "X-Api-Version": 2,
      "X-Resource-Token":
        "A64F3729889F2AB609839CDBE8127F95B949C468CE5BF7A62AFD13C64F67CDFC",
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJkZW5pc2Uuc2lsdmFAbGlua2FwaS5jb20uYnIiLCJzY29wZSI6WyJhbGwiXSwiZXhwIjoxNjIwOTkwOTI2LCJqdGkiOiJwVXdHTlVzc3d1Vy1yOUczcWh6NVpUSnhYcWciLCJjbGllbnRfaWQiOiJSSmVXcDY5aUxBaXBpdEl0In0.QDTdsfrwIgF5Ux1M6t2FegAmnKw4bKpYlnvH8holf1pXM1E1Ie2sQIU2tx8S11Sb69ddCRk8A0h-QESPid8_cJNsSN7B9sKS0O5C8zNttWqigXqyhq5alGi10M2hICEHhLTjlFOOp6COzgxAJm7AnP_Rk367vfPXji4q7RYjWHd9MZ2vq2JIEX_n0TCaOdyy9ERY5soUyj2eqpWE6pCKS50Og7EiL5BngpH6--eEo5-4LN8V1DeoomPssnWa0HAdgXWczr6ZWGqkbEuL9LuYVwp1wlMcgOjqAbyZ3d5FN1-vTwq4-UkBubGGwZ5Kh86xNZ7b_PlGRC16x0rV-IGE0A",
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
    console.log(error);
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
      const sendDocuments = await juno(
        "post",
        `/documents/${id}/files`,
        data
      );
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
      return createCharge.data;
    } catch (err) {
      return err;
    }
  },
  cancelCharge: async (id) => {
    try {
      const cancelCharge = await juno(
        "put",
        `/charges/${id}/cancelation`
      );
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
