import { Request, Response } from "express";
import Cliente from "../models/Cliente";

export const getClientes = async (request: Request, response: Response ) => {
    const clientes = await Cliente.findAll();

    response.json( clientes );
}

export const getClienteById = async (request: Request, response: Response ) => {
    
    const { id } = request.params;

    const cliente = await Cliente.findByPk( id );

    if( cliente ) {
        response.json( cliente );
    } else {
        response.status(404).json( {
            msg: "recurso no Encontrado"
        } )
    }

}

export const saveCliente = async (request: Request, response: Response) => {
    const nuevoRegistro = request.body;

    const cliente = await Cliente.create( nuevoRegistro );
    
    response.status(201).json(cliente);
}

export const updateCliente = async (request: Request, response: Response) => {

    const { id } = request.params;
    const { body } = request;

    try {

        const cliente = await Cliente.findByPk(id);


        if (!cliente) {
            return response.status(404).json({
                msg: `El Cliente con el ${id} no existe!`
            })
        }

        await cliente.update(body);

        response.json(cliente);


    } catch (error) {
        console.log(error);

        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        })
    }
}

export const deleteCliente = async (request: Request, response: Response) => {

    const { id } = request.params;

    try {

        const cliente = await Cliente.findByPk(id);


        if (!cliente) {
            return response.status(404).json({
                msg: `El Cliente con el ${id} no existe!`
            })
        }

        await cliente.destroy();

        response.json({
            msg: "Cliente Eliminada con Exito!"
        })


    } catch (error) {
        console.log(error);

        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        })
    }
}