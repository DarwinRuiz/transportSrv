import { Sequelize } from "sequelize";

const database = new Sequelize("transport", "usuariosqlazure", "azurePrivado23", {
    host: "sqlservidorprivado.database.windows.net",
    dialect: "mssql",
    logging: false
});

export default database;