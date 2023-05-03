import { Router } from "express";
const careerRoute = Router();
import careerController from "../controllers/admin/Careers.js";

careerRoute.post("/career/create", careerController.addCareer);
careerRoute.get("/career/getAll", careerController.getCareers);
careerRoute.delete("/career/delete/:id", careerController.deleteCareer);

export default careerRoute;
