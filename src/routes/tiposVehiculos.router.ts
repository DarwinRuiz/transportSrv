import { Router } from "express";
import { deleteTiposVehiculos, getTiposVehiculosById, getTiposVehiculos, saveTiposVehiculos, updateTiposVehiculos } from "../controllers/tiposVehiculos.controller";

const routeTiposVehiculos = Router();

routeTiposVehiculos.get("/", getTiposVehiculos);
routeTiposVehiculos.get("/:id", getTiposVehiculosById);
routeTiposVehiculos.post("/", saveTiposVehiculos);
routeTiposVehiculos.put("/:id", updateTiposVehiculos);
routeTiposVehiculos.delete("/:id", deleteTiposVehiculos);

export default routeTiposVehiculos;