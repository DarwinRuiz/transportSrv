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
exports.deleteSolicitudesTransporte = exports.updateSolicitudesTransporte = exports.saveSolicitudesTransporte = exports.getSolicitudesTransporteById = exports.getSolicitudesTransportes = void 0;
const SolicitudesTransporte_1 = __importDefault(require("../models/SolicitudesTransporte"));
const getSolicitudesTransportes = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const solicitudesTransportes = yield SolicitudesTransporte_1.default.findAll();
    response.json(solicitudesTransportes);
});
exports.getSolicitudesTransportes = getSolicitudesTransportes;
const getSolicitudesTransporteById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const solicitudesTransporte = yield SolicitudesTransporte_1.default.findByPk(id);
    if (solicitudesTransporte) {
        response.json(solicitudesTransporte);
    }
    else {
        response.status(404).json({
            msg: "recurso no Encontrado"
        });
    }
});
exports.getSolicitudesTransporteById = getSolicitudesTransporteById;
const saveSolicitudesTransporte = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoRegistro = request.body;
    const solicitudesTransporte = yield SolicitudesTransporte_1.default.create(nuevoRegistro);
    response.status(201).json(solicitudesTransporte);
});
exports.saveSolicitudesTransporte = saveSolicitudesTransporte;
const updateSolicitudesTransporte = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const { body } = request;
    try {
        const solicitudesTransporte = yield SolicitudesTransporte_1.default.findByPk(id);
        if (!solicitudesTransporte) {
            return response.status(404).json({
                msg: `La Solicitud de Transporte con el ${id} no existe!`
            });
        }
        yield solicitudesTransporte.update(body);
        response.json(solicitudesTransporte);
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        });
    }
});
exports.updateSolicitudesTransporte = updateSolicitudesTransporte;
const deleteSolicitudesTransporte = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const solicitudesTransporte = yield SolicitudesTransporte_1.default.findByPk(id);
        if (!solicitudesTransporte) {
            return response.status(404).json({
                msg: `La Solicitud de Transporte con el ${id} no existe!`
            });
        }
        yield solicitudesTransporte.destroy();
        response.json({
            msg: "Solicitud de Transporte Eliminada con Exito!"
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        });
    }
});
exports.deleteSolicitudesTransporte = deleteSolicitudesTransporte;
//# sourceMappingURL=solicitudesTransporte.controller.js.map