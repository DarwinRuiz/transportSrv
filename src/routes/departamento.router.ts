import { Router } from "express";
import { deleteDepartamento, getDepartamentoById, getDepartamentos, saveDepartamento, updateDepartamento } from "../controllers/departamento.controller";

const routeDepartamento = Router();

routeDepartamento.get("/", getDepartamentos);
routeDepartamento.get("/:id", getDepartamentoById);
routeDepartamento.post("/", saveDepartamento);
routeDepartamento.put("/:id", updateDepartamento);
routeDepartamento.delete("/:id", deleteDepartamento);

export default routeDepartamento;