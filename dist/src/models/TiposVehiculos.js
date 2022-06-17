"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const TiposVehiculos = connection_1.default.define("Tipos_Vehiculos", {
    tiposVehi_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tiposVehi_nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    tiposVehi_capacidad: {
        type: sequelize_1.DataTypes.STRING
    },
    tiposVehi_medida: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    schema: "Negocio"
});
exports.default = TiposVehiculos;
//# sourceMappingURL=TiposVehiculos.js.map