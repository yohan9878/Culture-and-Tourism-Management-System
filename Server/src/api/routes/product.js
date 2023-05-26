const productRoute = require("express").Router();
const { productController } = require("../controllers/product.js");

productRoute.post("/create", productController.createProduct);
productRoute.get("/getAll", productController.getProducts);
productRoute.get("/get/:id", productController.getOneProduct);
productRoute.put("update/:id", productController.updateProduct);
productRoute.delete("/delete/:id", productController.deleteProduct);

module.exports = productRoute;
