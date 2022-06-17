import { DataTypes } from 'sequelize';
import database from '../database/connection';


const Departamento = database.define( "Departamento", {
    departamento_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    departamento_nombre: {
        type: DataTypes.STRING
    },
    departamento_numero: {
        type: DataTypes.STRING
    }
},{
    schema: "Negocio"
})

export default Departamento;