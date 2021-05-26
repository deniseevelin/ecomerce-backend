const controller = require("../controllers/users-controller");
const middleware = require("../middleware/auth");

module.exports = (app) => {
  app.get("/users", middleware, controller.getAllUsers);

  app.get("/users/:id", controller.getUserById);

  app.post("/users/register", controller.registerUser);

  app.post("/users/auth", controller.userAuthentication);
};
