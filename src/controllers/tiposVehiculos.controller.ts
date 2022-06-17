import { Request, Response } from "express";
import TiposVehiculos from "../models/TiposVehiculos";

export const getTiposVehiculos = async (request: Request, response: Response ) => {
    const tiposVehiculos = await TiposVehiculos.findAll();

    response.json( tiposVehiculos );
}

export const getTiposVehiculosById = async (request: Request, response: Response ) => {
    
    const { id } = request.params;

    const tiposVehiculos = await TiposVehiculos.findByPk( id );

    if( tiposVehiculos ) {
        response.json( tiposVehiculos );
    } else {
        response.status(404).json( {
            msg: "recurso no Encontrado"
        } )
    }

}

export const saveTiposVehiculos = async (request: Request, response: Response) => {
    const nuevoRegistro = request.body;

    const tiposVehiculos = await TiposVehiculos.create( nuevoRegistro );
    
    response.status(201).json(tiposVehiculos);
}

export const updateTiposVehiculos = async (request: Request, response: Response) => {

    const { id } = request.params;
    const { body } = request;

    try {

        const tiposVehiculos = await TiposVehiculos.findByPk(id);


        if (!tiposVehiculos) {
            return response.status(404).json({
                msg: `El Tipo de Vehiculos con el ${id} no existe!`
            })
        }

        await tiposVehiculos.update(body);

        response.json(TiposVehiculos);


    } catch (error) {
        console.log(error);

        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        })
    }
}

export const deleteTiposVehiculos = async (request: Request, response: Response) => {

    const { id } = request.params;

    try {

        const tiposVehiculos = await TiposVehiculos.findByPk(id);


        if (!tiposVehiculos) {
            return response.status(404).json({
                msg: `La TiposVehiculos con el ${id} no existe!`
            })
        }

        await tiposVehiculos.destroy();

        response.json({
            msg: "Tipo de Vehiculos Eliminada con Exito!"
        })


    } catch (error) {
        console.log(error);

        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        })
    }
}