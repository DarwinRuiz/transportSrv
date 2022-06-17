import { Router } from "express";
import { deleteCliente, getClienteById, getClientes, saveCliente, updateCliente } from "../controllers/cliente.controller";

const routeCliente = Router();

routeCliente.get("/", getClientes);
routeCliente.get("/:id", getClienteById);
routeCliente.post("/", saveCliente);
routeCliente.put("/:id", updateCliente);
routeCliente.delete("/:id", deleteCliente);

export default routeCliente;