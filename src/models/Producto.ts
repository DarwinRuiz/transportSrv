import { DataTypes } from 'sequelize';
import database from '../database/connection';


const Producto = database.define( "Productos", {
    producto_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    producto_nombre: {
        type: DataTypes.STRING
    },
    producto_descripcion: {
        type: DataTypes.STRING
    },
    producto_cantidad: {
        type: DataTypes.INTEGER
    },
    producto_precio: {
        type: DataTypes.FLOAT
    },
    producto_categoriaProd_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    producto_planta_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    schema: "Negocio"
})

export default Producto;