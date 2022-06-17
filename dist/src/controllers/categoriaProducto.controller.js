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
exports.deleteCategoriasProducto = exports.updateCategoriasProducto = exports.saveCategoriasProducto = exports.getCategoriasProductoById = exports.getCategoriasProductos = void 0;
const CategoriasProducto_1 = __importDefault(require("../models/CategoriasProducto"));
const getCategoriasProductos = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const categoriasProductos = yield CategoriasProducto_1.default.findAll();
    response.json(categoriasProductos);
});
exports.getCategoriasProductos = getCategoriasProductos;
const getCategoriasProductoById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const categoriasProducto = yield CategoriasProducto_1.default.findByPk(id);
    if (categoriasProducto) {
        response.json(categoriasProducto);
    }
    else {
        response.status(404).json({
            msg: "recurso no Encontrado"
        });
    }
});
exports.getCategoriasProductoById = getCategoriasProductoById;
const saveCategoriasProducto = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoRegistro = request.body;
    const categoriasProducto = yield CategoriasProducto_1.default.create(nuevoRegistro);
    response.status(201).json(categoriasProducto);
});
exports.saveCategoriasProducto = saveCategoriasProducto;
const updateCategoriasProducto = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const { body } = request;
    try {
        const categoriasProducto = yield CategoriasProducto_1.default.findByPk(id);
        if (!categoriasProducto) {
            return response.status(404).json({
                msg: `La Categoria Producto con el ${id} no existe!`
            });
        }
        yield categoriasProducto.update(body);
        response.json(categoriasProducto);
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        });
    }
});
exports.updateCategoriasProducto = updateCategoriasProducto;
const deleteCategoriasProducto = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const categoriasProducto = yield CategoriasProducto_1.default.findByPk(id);
        if (!categoriasProducto) {
            return response.status(404).json({
                msg: `La Categoria Producto con el ${id} no existe!`
            });
        }
        yield categoriasProducto.destroy();
        response.json({
            msg: "CategoriasProducto Eliminada con Exito!"
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        });
    }
});
exports.deleteCategoriasProducto = deleteCategoriasProducto;
//# sourceMappingURL=categoriaProducto.controller.js.map