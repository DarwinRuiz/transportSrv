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
exports.deletePlanta = exports.updatePlanta = exports.savePlanta = exports.getPlantaById = exports.getPlantas = void 0;
const Planta_1 = __importDefault(require("../models/Planta"));
const getPlantas = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const Plantas = yield Planta_1.default.findAll();
    response.json(Plantas);
});
exports.getPlantas = getPlantas;
const getPlantaById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const planta = yield Planta_1.default.findByPk(id);
    if (planta) {
        response.json(planta);
    }
    else {
        response.status(404).json({
            msg: "recurso no Encontrado"
        });
    }
});
exports.getPlantaById = getPlantaById;
const savePlanta = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoRegistro = request.body;
    const planta = yield Planta_1.default.create(nuevoRegistro);
    response.status(201).json(planta);
});
exports.savePlanta = savePlanta;
const updatePlanta = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const { body } = request;
    try {
        const planta = yield Planta_1.default.findByPk(id);
        if (!planta) {
            return response.status(404).json({
                msg: `La Planta con el ${id} no existe!`
            });
        }
        yield planta.update(body);
        response.json(Planta_1.default);
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        });
    }
});
exports.updatePlanta = updatePlanta;
const deletePlanta = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const planta = yield Planta_1.default.findByPk(id);
        if (!planta) {
            return response.status(404).json({
                msg: `La Planta con el ${id} no existe!`
            });
        }
        yield planta.destroy();
        response.json({
            msg: "Planta Eliminada con Exito!"
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        });
    }
});
exports.deletePlanta = deletePlanta;
//# sourceMappingURL=planta.controller.js.map