const controller = require("../controllers/products-controller");

module.exports = (app) => {

  app.get("/products/:id", controller.getProductById);

  app.get("/products", controller.getAllProducts);

  app.post("/products/register", controller.registerProducts);

  app.patch("/products/:id", controller.updateProduct);

  app.delete("/products/:id", controller.removeProduct);
};
