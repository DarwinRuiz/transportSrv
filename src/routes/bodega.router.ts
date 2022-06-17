import { Router } from "express";
import { deleteBodega, getBodegaById, getBodegas, saveBodega, updateBodega } from "../controllers/bodega.controller";

const routeBodega = Router();

routeBodega.get("/", getBodegas);
routeBodega.get("/:id", getBodegaById);
routeBodega.post("/", saveBodega);
routeBodega.put("/:id", updateBodega);
routeBodega.delete("/:id", deleteBodega);

export default routeBodega;