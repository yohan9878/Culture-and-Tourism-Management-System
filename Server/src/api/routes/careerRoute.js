const { Router } = require("express");
const careerRoute = Router();
const careerController = require("../controllers/admin/Careers.js");

careerRoute.post("/career/create", careerController.addCareer);
careerRoute.get("/career/getAll", careerController.getCareers);
careerRoute.delete("/career/delete/:id", careerController.deleteCareer);

module.exports = careerRoute;
