import { Request, Response } from "express";
import Planta from "../models/Planta";

export const getPlantas = async (request: Request, response: Response ) => {
    const Plantas = await Planta.findAll();

    response.json( Plantas );
}

export const getPlantaById = async (request: Request, response: Response ) => {
    
    const { id } = request.params;

    const planta = await Planta.findByPk( id );

    if( planta ) {
        response.json( planta );
    } else {
        response.status(404).json( {
            msg: "recurso no Encontrado"
        } )
    }

}

export const savePlanta = async (request: Request, response: Response) => {
    const nuevoRegistro = request.body;

    const planta = await Planta.create( nuevoRegistro );
    
    response.status(201).json(planta);
}

export const updatePlanta = async (request: Request, response: Response) => {

    const { id } = request.params;
    const { body } = request;

    try {

        const planta = await Planta.findByPk(id);


        if (!planta) {
            return response.status(404).json({
                msg: `La Planta con el ${id} no existe!`
            })
        }

        await planta.update(body);

        response.json(Planta);


    } catch (error) {
        console.log(error);

        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        })
    }
}

export const deletePlanta = async (request: Request, response: Response) => {

    const { id } = request.params;

    try {

        const planta = await Planta.findByPk(id);


        if (!planta) {
            return response.status(404).json({
                msg: `La Planta con el ${id} no existe!`
            })
        }

        await planta.destroy();

        response.json({
            msg: "Planta Eliminada con Exito!"
        })


    } catch (error) {
        console.log(error);

        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        })
    }
}