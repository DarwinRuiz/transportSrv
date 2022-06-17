import { DataTypes } from 'sequelize';
import database from '../database/connection';


const Vehiculo = database.define( "Vehiculos", {
    vehiculo_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    vehiculo_placa: {
        type: DataTypes.STRING
    },
    vehiculo_modelo: {
        type: DataTypes.STRING
    },
    vehiculo_linea: {
        type: DataTypes.STRING
    },
    vehiculo_disponible: {
        type: DataTypes.BOOLEAN
    },
    vehiculo_tiposvehi_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    vehiculo_planta_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    schema: "Negocio"
})

export default Vehiculo;