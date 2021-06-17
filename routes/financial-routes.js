const controller = require("../controllers/financial-controller");
const middleware = require("../middleware/auth");

module.exports = (app) => {
  app.get("/balance", middleware, controller.getBalance);

  app.get("/charges", middleware, controller.getCharges);

  app.get("/charges/:id", middleware, controller.consultCharge);

  app.post("/charges", middleware, controller.createCharge);

  app.put("/charges/:id/cancelation", middleware, controller.cancelCharge);

  app.post("/credit-cards/tokenization", middleware, controller.tokenCreditCard);

  app.post("/payments", middleware, controller.paymentCharge);

  app.post("/payments/:id/refunds", middleware, controller.refundsPayment);

  app.post("/payments/:id/capture", middleware, controller.capturePayment);
};
