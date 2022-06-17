import { Request, Response } from "express";
import Bodega from "../models/Bodega";

export const getBodegas = async (request: Request, response: Response ) => {
    const bodegas = await Bodega.findAll();

    response.json( bodegas );
}

export const getBodegaById = async (request: Request, response: Response ) => {
    
    const { id } = request.params;

    const bodega = await Bodega.findByPk( id );

    if( bodega ) {
        response.json( bodega );
    } else {
        response.status(404).json( {
            msg: "recurso no Encontrado"
        } )
    }

}

export const saveBodega = async (request: Request, response: Response) => {
    const nuevoRegistro = request.body;

    const bodega = await Bodega.create( nuevoRegistro );
    
    response.status(201).json(bodega);
}

export const updateBodega = async (request: Request, response: Response) => {

    const { id } = request.params;
    const { body } = request;

    try {

        const bodega = await Bodega.findByPk(id);


        if (!bodega) {
            return response.status(404).json({
                msg: `La Bodega con el ${id} no existe!`
            })
        }

        await bodega.update(body);

        response.json(bodega);


    } catch (error) {
        console.log(error);

        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        })
    }
}

export const deleteBodega = async (request: Request, response: Response) => {

    const { id } = request.params;

    try {

        const bodega = await Bodega.findByPk(id);


        if (!bodega) {
            return response.status(404).json({
                msg: `La Bodega con el ${id} no existe!`
            })
        }

        await bodega.destroy();

        response.json({
            msg: "Bodega Eliminada con Exito!"
        })


    } catch (error) {
        console.log(error);

        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        })
    }
}