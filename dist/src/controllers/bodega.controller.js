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
exports.deleteBodega = exports.updateBodega = exports.saveBodega = exports.getBodegaById = exports.getBodegas = void 0;
const Bodega_1 = __importDefault(require("../models/Bodega"));
const getBodegas = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const bodegas = yield Bodega_1.default.findAll();
    response.json(bodegas);
});
exports.getBodegas = getBodegas;
const getBodegaById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const bodega = yield Bodega_1.default.findByPk(id);
    if (bodega) {
        response.json(bodega);
    }
    else {
        response.status(404).json({
            msg: "recurso no Encontrado"
        });
    }
});
exports.getBodegaById = getBodegaById;
const saveBodega = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoRegistro = request.body;
    const bodega = yield Bodega_1.default.create(nuevoRegistro);
    response.status(201).json(bodega);
});
exports.saveBodega = saveBodega;
const updateBodega = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const { body } = request;
    try {
        const bodega = yield Bodega_1.default.findByPk(id);
        if (!bodega) {
            return response.status(404).json({
                msg: `La Bodega con el ${id} no existe!`
            });
        }
        yield bodega.update(body);
        response.json(bodega);
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        });
    }
});
exports.updateBodega = updateBodega;
const deleteBodega = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    try {
        const bodega = yield Bodega_1.default.findByPk(id);
        if (!bodega) {
            return response.status(404).json({
                msg: `La Bodega con el ${id} no existe!`
            });
        }
        yield bodega.destroy();
        response.json({
            msg: "Bodega Eliminada con Exito!"
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        });
    }
});
exports.deleteBodega = deleteBodega;
//# sourceMappingURL=bodega.controller.js.map