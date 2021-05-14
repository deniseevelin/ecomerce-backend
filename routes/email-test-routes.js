const controller = require("../controllers/users-controller");

module.exports = (app) => {
  app.get("/email/test", controller.testEmailSend);
};
