"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const Servicio = connection_1.default.define("Servicios", {
    servicio_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    servicio_tipo: {
        type: sequelize_1.DataTypes.STRING
    },
    servicio_fecha_entrega: {
        type: sequelize_1.DataTypes.DATE
    },
    servicio_precio: {
        type: sequelize_1.DataTypes.FLOAT
    },
    servicio_planta_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    servicio_producto_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    servicio_cliente_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    schema: "Negocio"
});
exports.default = Servicio;
//# sourceMappingURL=Servicio.js.map