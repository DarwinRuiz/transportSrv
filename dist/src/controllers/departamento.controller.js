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
exports.deleteDepartamento = exports.updateDepartamento = exports.saveDepartamento = exports.getDepartamentoById = exports.getDepartamentos = void 0;
const Departamento_1 = __importDefault(require("../models/Departamento"));
const getDepartamentos = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentos = yield Departamento_1.default.findAll();
    response.json(departamentos);
});
exports.getDepartamentos = getDepartamentos;
const getDepartamentoById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const departamento = yield Departamento_1.default.findByPk(id);
    if (departamento) {
        response.json(departamento);
    }
    else {
        response.status(404).json({
            msg: "recurso no Encontrado"
        });
    }
});
exports.getDepartamentoById = getDepartamentoById;
const saveDepartamento = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoRegistro = request.body;
    const departamento = yield Departamento_1.default.create(nuevoRegistro);
    response.status(201).json(departamento);
});
exports.saveDepartamento = saveDepartamento;
const updateDepartamento = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const { body } = request;
    try {
        const departamento = yield Departamento_1.default.findByPk(id);
        if (!departamento) {
            return response.status(404).json({
                msg: `El Departamento con el ${id} no existe!`
            });
        }
        yield departamento.update(body);
        response.json(departamento);
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        });
    }
});
exports.updateDepartamento = updateDepartamento;
const deleteDepartamento = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const departamento = yield Departamento_1.default.findByPk(id);
        if (!departamento) {
            return response.status(404).json({
                msg: `El Departamento con el ${id} no existe!`
            });
        }
        yield departamento.destroy();
        response.json({
            msg: "Departamento Eliminado con Exito!"
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        });
    }
});
exports.deleteDepartamento = deleteDepartamento;
//# sourceMappingURL=departamento.controller.js.map