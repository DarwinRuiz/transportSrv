"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_controller_1 = require("../controllers/cliente.controller");
const routeCliente = (0, express_1.Router)();
routeCliente.get("/", cliente_controller_1.getClientes);
routeCliente.get("/:id", cliente_controller_1.getClienteById);
routeCliente.post("/", cliente_controller_1.saveCliente);
routeCliente.put("/:id", cliente_controller_1.updateCliente);
routeCliente.delete("/:id", cliente_controller_1.deleteCliente);
exports.default = routeCliente;
//# sourceMappingURL=cliente.router.js.map