import { Router } from "express";
import { deleteProducto, getProductoById, getProductos, saveProducto, updateProducto } from "../controllers/producto.controller";

const routeProducto = Router();

routeProducto.get("/", getProductos);
routeProducto.get("/:id", getProductoById);
routeProducto.post("/", saveProducto);
routeProducto.put("/:id", updateProducto);
routeProducto.delete("/:id", deleteProducto);

export default routeProducto;