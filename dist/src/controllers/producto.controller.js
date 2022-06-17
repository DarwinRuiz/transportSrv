"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProducto = exports.updateProducto = exports.saveProducto = exports.getProductoById = exports.getProductos = void 0;
const Producto_1 = __importDefault(require("../models/Producto"));
const getProductos = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const productos = yield Producto_1.default.findAll();
    response.json(productos);
});
exports.getProductos = getProductos;
const getProductoById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const producto = yield Producto_1.default.findByPk(id);
    if (producto) {
        response.json(producto);
    }
    else {
        response.status(404).json({
            msg: "recurso no Encontrado",
        });
    }
});
exports.getProductoById = getProductoById;
const saveProducto = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoRegistro = request.body;
    const producto = yield Producto_1.default.create(nuevoRegistro);
    response.status(201).json(producto);
});
exports.saveProducto = saveProducto;
const updateProducto = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const { body } = request;
    try {
        const producto = yield Producto_1.default.findByPk(id);
        if (!producto) {
            return response.status(404).json({
                msg: `El Producto con el ${id} no existe!`,
            });
        }
        yield producto.update(body);
        response.json(producto);
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!",
        });
    }
});
exports.updateProducto = updateProducto;
const deleteProducto = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const producto = yield Producto_1.default.findByPk(id);
        if (!producto) {
            return response.status(404).json({
                msg: `El Producto con el ${id} no existe!`,
            });
        }
        yield producto.destroy();
        response.json({
            msg: "Producto Eliminado con Exito!",
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!",
        });
    }
});
exports.deleteProducto = deleteProducto;
//# sourceMappingURL=producto.controller.js.map