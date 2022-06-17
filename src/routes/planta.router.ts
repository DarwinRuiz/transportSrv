import { Router } from "express";
import { deletePlanta, getPlantaById, getPlantas, savePlanta, updatePlanta } from "../controllers/planta.controller";

const routePlanta = Router();

routePlanta.get("/", getPlantas);
routePlanta.get("/:id", getPlantaById);
routePlanta.post("/", savePlanta);
routePlanta.put("/:id", updatePlanta);
routePlanta.delete("/:id", deletePlanta);

export default routePlanta;