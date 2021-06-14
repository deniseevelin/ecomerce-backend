const controller = require("../controllers/users-controller");
const middleware = require("../middleware/auth");

module.exports = (app) => {
  app.post("/users/register", controller.register);

  app.post("/users/auth", controller.login);

  app.get("/users/:id", middleware,controller.user);
  app.patch("/users/:id", controller.update);
  app.delete("/users/:id", middleware, controller.remove);

  app.get("/users", middleware, controller.list);
};
