"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriaProducto_controller_1 = require("../controllers/categoriaProducto.controller");
const routeCategoriaProducto = (0, express_1.Router)();
routeCategoriaProducto.get("/", categoriaProducto_controller_1.getCategoriasProductos);
routeCategoriaProducto.get("/:id", categoriaProducto_controller_1.getCategoriasProductoById);
routeCategoriaProducto.post("/", categoriaProducto_controller_1.saveCategoriasProducto);
routeCategoriaProducto.put("/:id", categoriaProducto_controller_1.updateCategoriasProducto);
routeCategoriaProducto.delete("/:id", categoriaProducto_controller_1.deleteCategoriasProducto);
exports.default = routeCategoriaProducto;
//# sourceMappingURL=categoriasProducto.router.js.map