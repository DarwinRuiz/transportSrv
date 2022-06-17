"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamento_1 = require("../controllers/departamento");
const route = (0, express_1.Router)();
route.get("/", departamento_1.getDepartamentos);
exports.default = route;
//# sourceMappingURL=departamento.js.map