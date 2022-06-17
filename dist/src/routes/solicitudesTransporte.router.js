"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const solicitudesTransporte_controller_1 = require("../controllers/solicitudesTransporte.controller");
const routeSolicitudesTransporte = (0, express_1.Router)();
routeSolicitudesTransporte.get("/", solicitudesTransporte_controller_1.getSolicitudesTransportes);
routeSolicitudesTransporte.get("/:id", solicitudesTransporte_controller_1.getSolicitudesTransporteById);
routeSolicitudesTransporte.post("/", solicitudesTransporte_controller_1.saveSolicitudesTransporte);
routeSolicitudesTransporte.put("/:id", solicitudesTransporte_controller_1.updateSolicitudesTransporte);
routeSolicitudesTransporte.delete("/:id", solicitudesTransporte_controller_1.deleteSolicitudesTransporte);
exports.default = routeSolicitudesTransporte;
//# sourceMappingURL=solicitudesTransporte.router.js.map