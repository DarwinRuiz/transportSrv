"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bodega_controller_1 = require("../controllers/bodega.controller");
const routeBodega = (0, express_1.Router)();
routeBodega.get("/", bodega_controller_1.getBodegas);
routeBodega.get("/:id", bodega_controller_1.getBodegaById);
routeBodega.post("/", bodega_controller_1.saveBodega);
routeBodega.put("/:id", bodega_controller_1.updateBodega);
routeBodega.delete("/:id", bodega_controller_1.deleteBodega);
exports.default = routeBodega;
//# sourceMappingURL=bodega.router.js.map