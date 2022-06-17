import { DataTypes } from 'sequelize';
import database from '../database/connection';


const CategoriasProducto = database.define( "categorias_productos", {
    categoriaProd_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    categoriaProd_nombre: {
        type: DataTypes.STRING
    },
    categoriaProd_bodega_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    schema: "Negocio"
})

export default CategoriasProducto;