"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const planta_controller_1 = require("../controllers/planta.controller");
const routePlanta = (0, express_1.Router)();
routePlanta.get("/", planta_controller_1.getPlantas);
routePlanta.get("/:id", planta_controller_1.getPlantaById);
routePlanta.post("/", planta_controller_1.savePlanta);
routePlanta.put("/:id", planta_controller_1.updatePlanta);
routePlanta.delete("/:id", planta_controller_1.deletePlanta);
exports.default = routePlanta;
//# sourceMappingURL=planta.router.js.map