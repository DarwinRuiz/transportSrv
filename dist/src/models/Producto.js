"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const Producto = connection_1.default.define("Productos", {
    producto_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    producto_nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    producto_descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    producto_cantidad: {
        type: sequelize_1.DataTypes.INTEGER
    },
    producto_precio: {
        type: sequelize_1.DataTypes.FLOAT
    },
    producto_categoriaProd_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    producto_planta_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    schema: "Negocio"
});
exports.default = Producto;
//# sourceMappingURL=Producto.js.map