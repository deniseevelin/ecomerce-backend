const controller = require("../controllers/users-controller");
const middleware = require("../middleware/auth");

module.exports = (app) => {
  app.get("/users/:id/cards", controller.card);

  app.post("/users/register", controller.register);

  app.post("/users/auth", controller.login);

  app.get("/users/:id",controller.user);
  app.patch("/users/:id", controller.update);
  app.delete("/users/:id", middleware, controller.remove);

  app.get("/users", middleware, controller.list);
};
