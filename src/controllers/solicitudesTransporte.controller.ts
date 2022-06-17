import { Request, Response } from "express";
import SolicitudesTransporte from "../models/SolicitudesTransporte";

export const getSolicitudesTransportes = async (request: Request, response: Response ) => {
    const solicitudesTransportes = await SolicitudesTransporte.findAll();

    response.json( solicitudesTransportes );
}

export const getSolicitudesTransporteById = async (request: Request, response: Response ) => {
    
    const { id } = request.params;

    const solicitudesTransporte = await SolicitudesTransporte.findByPk( id );

    if( solicitudesTransporte ) {
        response.json( solicitudesTransporte );
    } else {
        response.status(404).json( {
            msg: "recurso no Encontrado"
        } )
    }

}

export const saveSolicitudesTransporte = async (request: Request, response: Response) => {
    const nuevoRegistro = request.body;

    const solicitudesTransporte = await SolicitudesTransporte.create( nuevoRegistro );
    
    response.status(201).json(solicitudesTransporte);
}

export const updateSolicitudesTransporte = async (request: Request, response: Response) => {

    const { id } = request.params;
    const { body } = request;

    try {

        const solicitudesTransporte = await SolicitudesTransporte.findByPk(id);


        if (!solicitudesTransporte) {
            return response.status(404).json({
                msg: `La Solicitud de Transporte con el ${id} no existe!`
            })
        }

        await solicitudesTransporte.update(body);

        response.json(solicitudesTransporte);


    } catch (error) {
        console.log(error);

        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        })
    }
}

export const deleteSolicitudesTransporte = async (request: Request, response: Response) => {

    const { id } = request.params;

    try {

        const solicitudesTransporte = await SolicitudesTransporte.findByPk(id);


        if (!solicitudesTransporte) {
            return response.status(404).json({
                msg: `La Solicitud de Transporte con el ${id} no existe!`
            })
        }

        await solicitudesTransporte.destroy();

        response.json({
            msg: "Solicitud de Transporte Eliminada con Exito!"
        })


    } catch (error) {
        console.log(error);

        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        })
    }
}