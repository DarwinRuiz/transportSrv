"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database = new sequelize_1.Sequelize("transport", "usuariosqlazure", "azurePrivado23", {
    host: "sqlservidorprivado.database.windows.net",
    dialect: "mssql",
    logging: false
});
exports.default = database;
//# sourceMappingURL=connection.js.map