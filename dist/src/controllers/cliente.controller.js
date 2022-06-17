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
exports.deleteCliente = exports.updateCliente = exports.saveCliente = exports.getClienteById = exports.getClientes = void 0;
const Cliente_1 = __importDefault(require("../models/Cliente"));
const getClientes = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const clientes = yield Cliente_1.default.findAll();
    response.json(clientes);
});
exports.getClientes = getClientes;
const getClienteById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const cliente = yield Cliente_1.default.findByPk(id);
    if (cliente) {
        response.json(cliente);
    }
    else {
        response.status(404).json({
            msg: "recurso no Encontrado"
        });
    }
});
exports.getClienteById = getClienteById;
const saveCliente = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoRegistro = request.body;
    const cliente = yield Cliente_1.default.create(nuevoRegistro);
    response.status(201).json(cliente);
});
exports.saveCliente = saveCliente;
const updateCliente = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const { body } = request;
    try {
        const cliente = yield Cliente_1.default.findByPk(id);
        if (!cliente) {
            return response.status(404).json({
                msg: `El Cliente con el ${id} no existe!`
            });
        }
        yield cliente.update(body);
        response.json(cliente);
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        });
    }
});
exports.updateCliente = updateCliente;
const deleteCliente = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const cliente = yield Cliente_1.default.findByPk(id);
        if (!cliente) {
            return response.status(404).json({
                msg: `El Cliente con el ${id} no existe!`
            });
        }
        yield cliente.destroy();
        response.json({
            msg: "Cliente Eliminada con Exito!"
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        });
    }
});
exports.deleteCliente = deleteCliente;
//# sourceMappingURL=cliente.controller.js.map