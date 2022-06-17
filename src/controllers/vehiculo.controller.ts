import { Request, Response } from "express";
import Vehiculo from "../models/Vehiculo";

export const getVehiculos = async (request: Request, response: Response ) => {
    const vehiculos = await Vehiculo.findAll();

    response.json( vehiculos );
}

export const getVehiculoById = async (request: Request, response: Response ) => {
    
    const { id } = request.params;

    const vehiculo = await Vehiculo.findByPk( id );

    if( vehiculo ) {
        response.json( vehiculo );
    } else {
        response.status(404).json( {
            msg: "recurso no Encontrado"
        } )
    }

}

export const saveVehiculo = async (request: Request, response: Response) => {
    const nuevoRegistro = request.body;

    const vehiculo = await Vehiculo.create( nuevoRegistro );
    
    response.status(201).json(vehiculo);
}

export const updateVehiculo = async (request: Request, response: Response) => {

    const { id } = request.params;
    const { body } = request;

    try {

        const vehiculo = await Vehiculo.findByPk(id);


        if (!vehiculo) {
            return response.status(404).json({
                msg: `El Vehiculo con el ${id} no existe!`
            })
        }

        await vehiculo.update(body);

        response.json(vehiculo);


    } catch (error) {
        console.log(error);

        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        })
    }
}

export const deleteVehiculo = async (request: Request, response: Response) => {

    const { id } = request.params;

    try {

        const vehiculo = await Vehiculo.findByPk(id);


        if (!vehiculo) {
            return response.status(404).json({
                msg: `El Vehiculo con el ${id} no existe!`
            })
        }

        await vehiculo.destroy();

        response.json({
            msg: "Vehiculo Eliminada con Exito!"
        })


    } catch (error) {
        console.log(error);

        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        })
    }
}