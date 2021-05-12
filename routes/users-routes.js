const controller = require("../controllers/users-controller");
const middleware = require("../middleware/auth");

module.exports = (app) => {
  app.get("/users", middleware, controller.getAllUsers);

  app.post("/users/register", controller.registerUser);

  app.post("/users/authenticate", controller.userAuthentication);
};
