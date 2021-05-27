const controller = require("../controllers/users-controller");
const middleware = require("../middleware/auth");

module.exports = (app) => {
  app.post("/users/register", controller.registerUser);

  app.post("/users/auth", controller.userAuthentication);

  app.get("/users/:id", controller.getUserById);

  app.patch("users/:id", controller.updateUser);

  app.get("/users", middleware, controller.getAllUsers);
};
