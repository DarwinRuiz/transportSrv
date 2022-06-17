import { Router } from "express";
import { deleteSolicitudesTransporte, getSolicitudesTransporteById, getSolicitudesTransportes, saveSolicitudesTransporte, updateSolicitudesTransporte } from "../controllers/solicitudesTransporte.controller";

const routeSolicitudesTransporte = Router();

routeSolicitudesTransporte.get("/", getSolicitudesTransportes);
routeSolicitudesTransporte.get("/:id", getSolicitudesTransporteById);
routeSolicitudesTransporte.post("/", saveSolicitudesTransporte);
routeSolicitudesTransporte.put("/:id", updateSolicitudesTransporte);
routeSolicitudesTransporte.delete("/:id", deleteSolicitudesTransporte);

export default routeSolicitudesTransporte;