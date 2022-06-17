import { Request, Response } from "express";
import Servicio from "../models/Servicio";

export const getServicios = async (request: Request, response: Response ) => {
    const servicios = await Servicio.findAll();

    response.json( servicios );
}

export const getServicioById = async (request: Request, response: Response ) => {
    
    const { id } = request.params;

    const servicio = await Servicio.findByPk( id );

    if( servicio ) {
        response.json( servicio );
    } else {
        response.status(404).json( {
            msg: "recurso no Encontrado"
        } )
    }

}

export const saveServicio = async (request: Request, response: Response) => {
    const nuevoRegistro = request.body;

    const servicio = await Servicio.create( nuevoRegistro );
    
    response.status(201).json(servicio);
}

export const updateServicio = async (request: Request, response: Response) => {

    const { id } = request.params;
    const { body } = request;

    try {

        const servicio = await Servicio.findByPk(id);


        if (!servicio) {
            return response.status(404).json({
                msg: `El Servicio con el ${id} no existe!`
            })
        }

        await servicio.update(body);

        response.json(servicio);


    } catch (error) {
        console.log(error);

        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        })
    }
}

export const deleteServicio = async (request: Request, response: Response) => {

    const { id } = request.params;

    try {

        const servicio = await Servicio.findByPk(id);


        if (!servicio) {
            return response.status(404).json({
                msg: `El Servicio con el ${id} no existe!`
            })
        }

        await servicio.destroy();

        response.json({
            msg: "Servicio Eliminada con Exito!"
        })


    } catch (error) {
        console.log(error);

        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        })
    }
}