const categoryRoute = require("express").Router();
const { categoryController } = require("../controllers/category.js");

categoryRoute.post(
	"/api/category/create",
	categoryController.createCategory,
);
categoryRoute.get(
	"/api/MainCategory/",
	categoryController.getMainCategory,
);
categoryRoute.get("/api/SubCategory/", categoryController.getSubCategory);
categoryRoute.post(
	"/api/IdSubCategory/",
	categoryController.getIdSubCategory,
);
categoryRoute.get(
	"/api/OneCategory/:id",
	categoryController.getOneCategory,
);
categoryRoute.put(
	"/api/Category/update/:id",
	categoryController.updateCategory,
);

module.exports = categoryRoute;
