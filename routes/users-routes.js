const controller = require("../controllers/users-controller");
const middleware = require("../middleware/auth");

module.exports = (app) => {
  app.post("/users/register", controller.register);

  app.post("/users/auth", controller.login);

  app.get("/users/:id", controller.user);

  app.patch("users/:id", middleware, controller.update);

  app.delete("/users/:id", controller.remove);

  app.get("/users", controller.list);
};
