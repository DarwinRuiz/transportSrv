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
exports.deleteServicio = exports.updateServicio = exports.saveServicio = exports.getServicioById = exports.getServicios = void 0;
const Servicio_1 = __importDefault(require("../models/Servicio"));
const getServicios = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const servicios = yield Servicio_1.default.findAll();
    response.json(servicios);
});
exports.getServicios = getServicios;
const getServicioById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const servicio = yield Servicio_1.default.findByPk(id);
    if (servicio) {
        response.json(servicio);
    }
    else {
        response.status(404).json({
            msg: "recurso no Encontrado"
        });
    }
});
exports.getServicioById = getServicioById;
const saveServicio = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoRegistro = request.body;
    const servicio = yield Servicio_1.default.create(nuevoRegistro);
    response.status(201).json(servicio);
});
exports.saveServicio = saveServicio;
const updateServicio = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const { body } = request;
    try {
        const servicio = yield Servicio_1.default.findByPk(id);
        if (!servicio) {
            return response.status(404).json({
                msg: `El Servicio con el ${id} no existe!`
            });
        }
        yield servicio.update(body);
        response.json(servicio);
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        });
    }
});
exports.updateServicio = updateServicio;
const deleteServicio = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const servicio = yield Servicio_1.default.findByPk(id);
        if (!servicio) {
            return response.status(404).json({
                msg: `El Servicio con el ${id} no existe!`
            });
        }
        yield servicio.destroy();
        response.json({
            msg: "Servicio Eliminada con Exito!"
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        });
    }
});
exports.deleteServicio = deleteServicio;
//# sourceMappingURL=servicio.controller.js.map