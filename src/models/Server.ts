import express, { Application } from "express";
import cors from "cors";

import database from "../database/connection";
import routeDepartamento from "../routes/departamento.router";
import routePlanta from "../routes/planta.router";
import routeTiposVehiculos from "../routes/tiposVehiculos.router";
import routeVehiculo from "../routes/vehiculo.router";
import routeBodega from "../routes/bodega.router";
import routeCategoriaProducto from "../routes/categoriasProducto.router";
import routeProducto from "../routes/producto.router";
import routeCliente from "../routes/cliente.router";
import routeServicio from "../routes/servicio.router";
import routeSolicitudesTransporte from "../routes/solicitudesTransporte.router";

export class Server{
    private PORT: string;
    private app: Application;

    constructor(){
        this.app = express();
        this.PORT = process.env.PORT || "8000";
        this.middlewares();
        this.databaseConnection();
        this.routes();
    }

    private databaseConnection = async () => {
        try {

            await database.authenticate();
            console.log("online database");

        } catch (error: any) {
            throw new Error( error );
        }
    }

    private middlewares = () => {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static("public") );
    }

    private routes = () => {
        this.app.use( "/api/departamentos", routeDepartamento );
        this.app.use( "/api/plantas", routePlanta );
        this.app.use( "/api/tipos-vehiculos", routeTiposVehiculos );
        this.app.use( "/api/vehiculos", routeVehiculo );
        this.app.use( "/api/bodegas", routeBodega );
        this.app.use( "/api/categorias_productos", routeCategoriaProducto );
        this.app.use( "/api/productos", routeProducto );
        this.app.use( "/api/clientes", routeCliente );
        this.app.use( "/api/servicios", routeServicio );
        this.app.use( "/api/solicitudes-transporte", routeSolicitudesTransporte );
    }

    public listen = () => {
        this.app.listen( this.PORT );
        console.log(this.PORT);
    }
}