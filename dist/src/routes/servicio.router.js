"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const servicio_controller_1 = require("../controllers/servicio.controller");
const routeServicio = (0, express_1.Router)();
routeServicio.get("/", servicio_controller_1.getServicios);
routeServicio.get("/:id", servicio_controller_1.getServicioById);
routeServicio.post("/", servicio_controller_1.saveServicio);
routeServicio.put("/:id", servicio_controller_1.updateServicio);
routeServicio.delete("/:id", servicio_controller_1.deleteServicio);
exports.default = routeServicio;
//# sourceMappingURL=servicio.router.js.map