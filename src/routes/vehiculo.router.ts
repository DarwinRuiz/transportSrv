import { Router } from "express";
import { deleteVehiculo, getVehiculoById, getVehiculos, saveVehiculo, updateVehiculo } from "../controllers/vehiculo.controller";

const routeVehiculo = Router();

routeVehiculo.get("/", getVehiculos);
routeVehiculo.get("/:id", getVehiculoById);
routeVehiculo.post("/", saveVehiculo);
routeVehiculo.put("/:id", updateVehiculo);
routeVehiculo.delete("/:id", deleteVehiculo);

export default routeVehiculo;