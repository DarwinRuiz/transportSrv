import { Router } from "express";
import { deleteCategoriasProducto, getCategoriasProductoById, getCategoriasProductos, saveCategoriasProducto, updateCategoriasProducto } from "../controllers/categoriaProducto.controller";

const routeCategoriaProducto = Router();

routeCategoriaProducto.get("/", getCategoriasProductos);
routeCategoriaProducto.get("/:id", getCategoriasProductoById);
routeCategoriaProducto.post("/", saveCategoriasProducto);
routeCategoriaProducto.put("/:id", updateCategoriasProducto);
routeCategoriaProducto.delete("/:id", deleteCategoriasProducto);

export default routeCategoriaProducto;