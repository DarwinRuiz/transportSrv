"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const Planta = connection_1.default.define("Plantas", {
    planta_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    planta_nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    planta_procesamiento: {
        type: sequelize_1.DataTypes.STRING
    },
    planta_departamento_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    schema: "Negocio"
});
exports.default = Planta;
//# sourceMappingURL=Planta.js.map