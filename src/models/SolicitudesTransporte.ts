import { DataTypes } from 'sequelize';
import database from '../database/connection';


const SolicitudesTransporte = database.define( "solicitudes_transporte", {
    solicitudTransp_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    solicitudTransp_destino: {
        type: DataTypes.STRING
    },
    solicitudTransp_peso: {
        type: DataTypes.STRING
    },
    solicitudTransp_emisor: {
        type: DataTypes.STRING
    },
    solicitudTransp_receptor: {
        type: DataTypes.STRING
    },
    solicitudTransp_cantidad_productos: {
        type: DataTypes.INTEGER
    },
    solicitudTransp_producto_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    solicitudTransp_bodega_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    schema: "Negocio"
})

export default SolicitudesTransporte;