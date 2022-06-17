import { DataTypes } from 'sequelize';
import database from '../database/connection';


const Servicio = database.define( "Servicios", {
    servicio_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    servicio_tipo: {
        type: DataTypes.STRING
    },
    servicio_fecha_entrega: {
        type: DataTypes.DATE
    },
    servicio_precio: {
        type: DataTypes.FLOAT
    },
    servicio_planta_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    servicio_producto_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    servicio_cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    schema: "Negocio"
})

export default Servicio;