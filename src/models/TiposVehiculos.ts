import { DataTypes } from 'sequelize';
import database from '../database/connection';


const TiposVehiculos = database.define( "Tipos_Vehiculos", {
    tiposVehi_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tiposVehi_nombre: {
        type: DataTypes.STRING
    },
    tiposVehi_capacidad: {
        type: DataTypes.STRING
    },
    tiposVehi_medida: {
        type: DataTypes.STRING
    }
},{
    schema: "Negocio"
})

export default TiposVehiculos;