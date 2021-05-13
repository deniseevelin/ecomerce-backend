const controller = require("../controllers/products-controller");

module.exports = (app) => {
  app.get("/products", controller.getAllProducts);

  app.post("/products/register", controller.registerProducts);
};
