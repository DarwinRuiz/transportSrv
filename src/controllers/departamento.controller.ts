import { Request, Response } from "express";
import Departamento from "../models/Departamento";

export const getDepartamentos = async (request: Request, response: Response ) => {
    const departamentos = await Departamento.findAll();

    response.json( departamentos );
}

export const getDepartamentoById = async (request: Request, response: Response ) => {
    
    const { id } = request.params;

    const departamento = await Departamento.findByPk( id );

    if( departamento ) {
        response.json( departamento );
    } else {
        response.status(404).json( {
            msg: "recurso no Encontrado"
        } )
    }

}

export const saveDepartamento = async (request: Request, response: Response) => {
    const nuevoRegistro = request.body;

    const departamento = await Departamento.create( nuevoRegistro );
    
    response.status(201).json(departamento);
}

export const updateDepartamento = async (request: Request, response: Response) => {

    const { id } = request.params;
    const { body } = request;

    try {

        const departamento = await Departamento.findByPk(id);


        if (!departamento) {
            return response.status(404).json({
                msg: `El Departamento con el ${id} no existe!`
            })
        }

        await departamento.update(body);

        response.json(departamento);


    } catch (error) {
        console.log(error);

        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        })
    }
}

export const deleteDepartamento = async (request: Request, response: Response) => {

    const { id } = request.params;

    try {

        const departamento = await Departamento.findByPk(id);


        if (!departamento) {
            return response.status(404).json({
                msg: `El Departamento con el ${id} no existe!`
            })
        }

        await departamento.destroy();

        response.json({
            msg: "Departamento Eliminado con Exito!"
        })


    } catch (error) {
        console.log(error);

        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        })
    }
}