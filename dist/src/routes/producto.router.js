"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_controller_1 = require("../controllers/producto.controller");
const routeProducto = (0, express_1.Router)();
routeProducto.get("/", producto_controller_1.getProductos);
routeProducto.get("/:id", producto_controller_1.getProductoById);
routeProducto.post("/", producto_controller_1.saveProducto);
routeProducto.put("/:id", producto_controller_1.updateProducto);
routeProducto.delete("/:id", producto_controller_1.deleteProducto);
exports.default = routeProducto;
//# sourceMappingURL=producto.router.js.map