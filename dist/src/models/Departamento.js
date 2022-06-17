"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const Departamento = connection_1.default.define("Departamento", {
    departamento_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    departamento_nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    departamento_numero: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    schema: "Negocio"
});
exports.default = Departamento;
//# sourceMappingURL=Departamento.js.map