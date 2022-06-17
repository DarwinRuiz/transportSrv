import { Router } from "express";
import { deleteServicio, getServicioById, getServicios, saveServicio, updateServicio } from "../controllers/servicio.controller";

const routeServicio = Router();

routeServicio.get("/", getServicios);
routeServicio.get("/:id", getServicioById);
routeServicio.post("/", saveServicio);
routeServicio.put("/:id", updateServicio);
routeServicio.delete("/:id", deleteServicio);

export default routeServicio;