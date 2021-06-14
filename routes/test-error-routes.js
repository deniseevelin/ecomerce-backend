const controller = require("../controllers/test-error-controller");

module.exports = (app) => {
  app.get("/tester", controller.tester);
};
