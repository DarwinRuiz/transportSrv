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
exports.deleteTiposVehiculos = exports.updateTiposVehiculos = exports.saveTiposVehiculos = exports.getTiposVehiculosById = exports.getTiposVehiculos = void 0;
const TiposVehiculos_1 = __importDefault(require("../models/TiposVehiculos"));
const getTiposVehiculos = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const tiposVehiculos = yield TiposVehiculos_1.default.findAll();
    response.json(tiposVehiculos);
});
exports.getTiposVehiculos = getTiposVehiculos;
const getTiposVehiculosById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const tiposVehiculos = yield TiposVehiculos_1.default.findByPk(id);
    if (tiposVehiculos) {
        response.json(tiposVehiculos);
    }
    else {
        response.status(404).json({
            msg: "recurso no Encontrado"
        });
    }
});
exports.getTiposVehiculosById = getTiposVehiculosById;
const saveTiposVehiculos = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoRegistro = request.body;
    const tiposVehiculos = yield TiposVehiculos_1.default.create(nuevoRegistro);
    response.status(201).json(tiposVehiculos);
});
exports.saveTiposVehiculos = saveTiposVehiculos;
const updateTiposVehiculos = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const { body } = request;
    try {
        const tiposVehiculos = yield TiposVehiculos_1.default.findByPk(id);
        if (!tiposVehiculos) {
            return response.status(404).json({
                msg: `El Tipo de Vehiculos con el ${id} no existe!`
            });
        }
        yield tiposVehiculos.update(body);
        response.json(TiposVehiculos_1.default);
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        });
    }
});
exports.updateTiposVehiculos = updateTiposVehiculos;
const deleteTiposVehiculos = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const tiposVehiculos = yield TiposVehiculos_1.default.findByPk(id);
        if (!tiposVehiculos) {
            return response.status(404).json({
                msg: `La TiposVehiculos con el ${id} no existe!`
            });
        }
        yield tiposVehiculos.destroy();
        response.json({
            msg: "Tipo de Vehiculos Eliminada con Exito!"
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        });
    }
});
exports.deleteTiposVehiculos = deleteTiposVehiculos;
//# sourceMappingURL=tiposVehiculos.controller.js.map