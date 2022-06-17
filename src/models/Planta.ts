import { DataTypes } from 'sequelize';
import database from '../database/connection';


const Planta = database.define( "Plantas", {
    planta_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    planta_nombre: {
        type: DataTypes.STRING
    },
    planta_procesamiento: {
        type: DataTypes.STRING
    },
    planta_departamento_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    schema: "Negocio"
})

export default Planta;