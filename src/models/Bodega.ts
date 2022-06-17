import { DataTypes } from 'sequelize';
import database from '../database/connection';


const Bodega = database.define( "Bodegas", {
    bodega_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bodega_direccion: {
        type: DataTypes.STRING
    },
    bodega_contacto: {
        type: DataTypes.STRING
    },
    bodega_encargado: {
        type: DataTypes.STRING
    }
},{
    schema: "Negocio"
})

export default Bodega;