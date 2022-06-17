"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const Cliente = connection_1.default.define("Clientes", {
    cliente_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cliente_nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    cliente_pais: {
        type: sequelize_1.DataTypes.STRING
    },
    cliente_representante_legal: {
        type: sequelize_1.DataTypes.STRING
    },
    cliente_telefono: {
        type: sequelize_1.DataTypes.STRING
    },
    cliente_nit: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    schema: "Negocio"
});
exports.default = Cliente;
//# sourceMappingURL=Cliente.js.map