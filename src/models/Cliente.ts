import { DataTypes } from 'sequelize';
import database from '../database/connection';


const Cliente = database.define( "Clientes", {
    cliente_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cliente_nombre: {
        type: DataTypes.STRING
    },
    cliente_pais: {
        type: DataTypes.STRING
    },
    cliente_representante_legal: {
        type: DataTypes.STRING
    },
    cliente_telefono: {
        type: DataTypes.STRING
    },
    cliente_nit: {
        type: DataTypes.STRING
    }
},{
    schema: "Negocio"
})

export default Cliente;