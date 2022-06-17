import { Request, Response } from "express";
import CategoriasProducto from "../models/CategoriasProducto";

export const getCategoriasProductos = async (request: Request, response: Response ) => {
    const categoriasProductos = await CategoriasProducto.findAll();

    response.json( categoriasProductos );
}

export const getCategoriasProductoById = async (request: Request, response: Response ) => {
    
    const { id } = request.params;

    const categoriasProducto = await CategoriasProducto.findByPk( id );

    if( categoriasProducto ) {
        response.json( categoriasProducto );
    } else {
        response.status(404).json( {
            msg: "recurso no Encontrado"
        } )
    }

}

export const saveCategoriasProducto = async (request: Request, response: Response) => {
    const nuevoRegistro = request.body;

    const categoriasProducto = await CategoriasProducto.create( nuevoRegistro );
    
    response.status(201).json(categoriasProducto);
}

export const updateCategoriasProducto = async (request: Request, response: Response) => {

    const { id } = request.params;
    const { body } = request;

    try {

        const categoriasProducto = await CategoriasProducto.findByPk(id);


        if (!categoriasProducto) {
            return response.status(404).json({
                msg: `La Categoria Producto con el ${id} no existe!`
            })
        }

        await categoriasProducto.update(body);

        response.json(categoriasProducto);


    } catch (error) {
        console.log(error);

        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        })
    }
}

export const deleteCategoriasProducto = async (request: Request, response: Response) => {

    const { id } = request.params;

    try {

        const categoriasProducto = await CategoriasProducto.findByPk(id);


        if (!categoriasProducto) {
            return response.status(404).json({
                msg: `La Categoria Producto con el ${id} no existe!`
            })
        }

        await categoriasProducto.destroy();

        response.json({
            msg: "CategoriasProducto Eliminada con Exito!"
        })


    } catch (error) {
        console.log(error);

        response.status(500).json({
            msg: "Comuniquese con el Administrador del Recurso!"
        })
    }
}