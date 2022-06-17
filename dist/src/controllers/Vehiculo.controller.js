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
exports.deleteVehiculo = exports.updateVehiculo = exports.saveVehiculo = exports.getVehiculoById = exports.getVehiculos = void 0;
const Vehiculo_1 = __importDefault(require("../models/Vehiculo"));
const getVehiculos = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const vehiculos = yield Vehiculo_1.default.findAll();
    response.json(vehiculos);
});
exports.getVehiculos = getVehiculos;
const getVehiculoById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const vehiculo = yield Vehiculo_1.default.findByPk(id);
    if (vehiculo) {
        response.json(vehiculo);
    }
    else {
        response.status(404).json({
            msg: "recurso no Encontrado"
        });
    }
});
exports.getVehiculoById = getVehiculoById;
const saveVehiculo = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoRegistro = request.body;
    const vehiculo = yield Vehiculo_1.default.create(nuevoRegistro);
    response.status(201).json(vehiculo);
});
exports.saveVehiculo = saveVehiculo;
const updateVehiculo = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const { body } = request;
    try {
        const vehiculo = yield Vehiculo_1.default.findByPk(id);
        if (!vehiculo) {
            return response.status(404).json({
                msg: `El Vehiculo con el ${id} no existe!`
            });
        }
        yield vehiculo.update(body);
        response.json(vehiculo);
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        });
    }
});
exports.updateVehiculo = updateVehiculo;
const deleteVehiculo = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const vehiculo = yield Vehiculo_1.default.findByPk(id);
        if (!vehiculo) {
            return response.status(404).json({
                msg: `El Vehiculo con el ${id} no existe!`
            });
        }
        yield vehiculo.destroy();
        response.json({
            msg: "Vehiculo Eliminada con Exito!"
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        });
    }
});
exports.deleteVehiculo = deleteVehiculo;
//# sourceMappingURL=vehiculo.controller.js.map