"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamento_controller_1 = require("../controllers/departamento.controller");
const routeDepartamento = (0, express_1.Router)();
routeDepartamento.get("/", departamento_controller_1.getDepartamentos);
routeDepartamento.get("/:id", departamento_controller_1.getDepartamentoById);
routeDepartamento.post("/", departamento_controller_1.saveDepartamento);
routeDepartamento.put("/:id", departamento_controller_1.updateDepartamento);
routeDepartamento.delete("/:id", departamento_controller_1.deleteDepartamento);
exports.default = routeDepartamento;
//# sourceMappingURL=departamento.router.js.map