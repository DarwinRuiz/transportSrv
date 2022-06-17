"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehiculo_controller_1 = require("../controllers/vehiculo.controller");
const routeVehiculo = (0, express_1.Router)();
routeVehiculo.get("/", vehiculo_controller_1.getVehiculos);
routeVehiculo.get("/:id", vehiculo_controller_1.getVehiculoById);
routeVehiculo.post("/", vehiculo_controller_1.saveVehiculo);
routeVehiculo.put("/:id", vehiculo_controller_1.updateVehiculo);
routeVehiculo.delete("/:id", vehiculo_controller_1.deleteVehiculo);
exports.default = routeVehiculo;
//# sourceMappingURL=vehiculo.router.js.map