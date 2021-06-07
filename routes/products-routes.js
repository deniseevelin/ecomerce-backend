const controller = require("../controllers/products-controller");

module.exports = (app) => {

  app.post("/products/register", controller.register);

  app.get("/products/:id", controller.product);

  app.put("/products/:id", controller.update);

  app.delete("/products/:id", controller.remove);

  app.get("/products", controller.list);
};

