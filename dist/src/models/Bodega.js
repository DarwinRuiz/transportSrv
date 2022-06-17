"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const Bodega = connection_1.default.define("Bodegas", {
    bodega_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bodega_direccion: {
        type: sequelize_1.DataTypes.STRING
    },
    bodega_contacto: {
        type: sequelize_1.DataTypes.STRING
    },
    bodega_encargado: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    schema: "Negocio"
});
exports.default = Bodega;
//# sourceMappingURL=Bodega.js.map