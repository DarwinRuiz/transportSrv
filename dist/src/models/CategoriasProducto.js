"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const CategoriasProducto = connection_1.default.define("categorias_productos", {
    categoriaProd_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    categoriaProd_nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    categoriaProd_bodega_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    schema: "Negocio"
});
exports.default = CategoriasProducto;
//# sourceMappingURL=CategoriasProducto.js.map