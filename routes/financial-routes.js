const controller = require("../controllers/financial-controller");
const middleware = require("../middleware/auth");

module.exports = (app) => {
  app.get("/data/banks", middleware, controller.banksInformation);

  app.get("/data/company-types", middleware, controller.getCompanyTypes);

  app.get("/data/business-areas", middleware, controller.getBusinessAreas);

  app.get("/digital-accounts", middleware, controller.getAccount);

  app.get("/balance", middleware, controller.getBalance);

  app.get("/documents", middleware, controller.getRequireDocuments);

  app.get("/documents/:id", middleware, controller.getStatusDocuments);

  app.post("/digital-accounts",middleware, controller.createAccount);

  app.post("/documents/:id/files", middleware, controller.sendDocuments);

  app.patch("/digital-accounts", middleware, controller.updateAccount);

  app.get("/charges", middleware, controller.getCharges);

  app.get("/charges/:id", middleware, controller.consultCharge);

  app.post("/charges", middleware, controller.createCharge);

  app.put("/charges/:id/cancelation", middleware, controller.cancelCharge);

  app.put("/charges/:id/split", middleware, controller.updateSplit);

  app.post("/credit-cards/tokenization", middleware, controller.tokenCreditCard);

  app.post("/payments", middleware, controller.paymentCharge);

  app.post("/payments/:id/refunds", middleware, controller.refundsPayment);

  app.post("/payments/:id/capture", middleware, controller.capturePayment);
};
