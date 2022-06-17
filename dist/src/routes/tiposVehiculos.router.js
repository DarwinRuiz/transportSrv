"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tiposVehiculos_controller_1 = require("../controllers/tiposVehiculos.controller");
const routeTiposVehiculos = (0, express_1.Router)();
routeTiposVehiculos.get("/", tiposVehiculos_controller_1.getTiposVehiculos);
routeTiposVehiculos.get("/:id", tiposVehiculos_controller_1.getTiposVehiculosById);
routeTiposVehiculos.post("/", tiposVehiculos_controller_1.saveTiposVehiculos);
routeTiposVehiculos.put("/:id", tiposVehiculos_controller_1.updateTiposVehiculos);
routeTiposVehiculos.delete("/:id", tiposVehiculos_controller_1.deleteTiposVehiculos);
exports.default = routeTiposVehiculos;
//# sourceMappingURL=tiposVehiculos.router.js.map