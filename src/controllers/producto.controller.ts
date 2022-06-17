import { Request, Response } from "express";
import Producto from "../models/Producto";

export const getProductos = async (request: Request, response: Response) => {
  const productos = await Producto.findAll();

  response.json(productos);
};

export const getProductoById = async (request: Request, response: Response) => {
  const { id } = request.params;

  const producto = await Producto.findByPk(id);

  if (producto) {
    response.json(producto);
  } else {
    response.status(404).json({
      msg: "recurso no Encontrado",
    });
  }
};

export const saveProducto = async (request: Request, response: Response) => {
  const nuevoRegistro = request.body;

  const producto = await Producto.create(nuevoRegistro);

  response.status(201).json(producto);
};

export const updateProducto = async (request: Request, response: Response) => {
  const { id } = request.params;
  const { body } = request;

  try {
    const producto = await Producto.findByPk(id);

    if (!producto) {
      return response.status(404).json({
        msg: `El Producto con el ${id} no existe!`,
      });
    }

    await producto.update(body);

    response.json(producto);
  } catch (error) {
    console.log(error);

    response.status(500).json({
      msg: "Comuniquese con el Administrador del Recurso!",
    });
  }
};

export const deleteProducto = async (request: Request, response: Response) => {
  const { id } = request.params;

  try {
    const producto = await Producto.findByPk(id);

    if (!producto) {
      return response.status(404).json({
        msg: `El Producto con el ${id} no existe!`,
      });
    }

    await producto.destroy();

    response.json({
      msg: "Producto Eliminado con Exito!",
    });
  } catch (error) {
    console.log(error);

    response.status(500).json({
      msg: "Comuniquese con el Administrador del Recurso!",
    });
  }
};
