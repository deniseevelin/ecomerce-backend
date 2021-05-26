const controller = require("../controllers/products-controller");

module.exports = (app) => {

  app.post("/products/register", controller.registerProducts);

  app.get("/products/:id", controller.getProductById);

  app.patch("/products/:id", controller.updateProduct);

  app.delete("/products/:id", controller.removeProduct);

  app.get("/products", controller.getAllProducts);

//   router.prefix('/products', authMiddleware, async function (user) {
    
//     user.route('/register')
//     .post(controller.registerProducts);
    
//     user.route('/:id')
//     .get(controller.getProductById)
//     .patch(controller.updateProduct)
//     .delete(controller.removeProduct);
    
//     user.route('/')
//     .get(controller.getAllProducts);

// });
};

