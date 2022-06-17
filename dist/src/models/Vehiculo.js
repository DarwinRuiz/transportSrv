"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const Vehiculo = connection_1.default.define("Vehiculos", {
    vehiculo_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    vehiculo_placa: {
        type: sequelize_1.DataTypes.STRING
    },
    vehiculo_modelo: {
        type: sequelize_1.DataTypes.STRING
    },
    vehiculo_linea: {
        type: sequelize_1.DataTypes.STRING
    },
    vehiculo_disponible: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    vehiculo_tiposvehi_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    vehiculo_planta_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    schema: "Negocio"
});
exports.default = Vehiculo;
//# sourceMappingURL=Vehiculo.js.map