"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const SolicitudesTransporte = connection_1.default.define("solicitudes_transporte", {
    solicitudTransp_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    solicitudTransp_destino: {
        type: sequelize_1.DataTypes.STRING
    },
    solicitudTransp_peso: {
        type: sequelize_1.DataTypes.STRING
    },
    solicitudTransp_emisor: {
        type: sequelize_1.DataTypes.STRING
    },
    solicitudTransp_receptor: {
        type: sequelize_1.DataTypes.STRING
    },
    solicitudTransp_cantidad_productos: {
        type: sequelize_1.DataTypes.INTEGER
    },
    solicitudTransp_producto_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    solicitudTransp_bodega_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    schema: "Negocio"
});
exports.default = SolicitudesTransporte;
//# sourceMappingURL=SolicitudesTransporte.js.map