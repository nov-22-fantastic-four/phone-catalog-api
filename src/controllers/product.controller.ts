import { type Handler } from 'express';
import * as productService from '../services/product.service';

export const getAll: Handler = async(req, res) => {
  const { page = 1, perPage } = req.query;

  if (perPage === undefined) {
    const products = await productService.getAll();

    return res.send(products);
  }

  const products = await productService.getWithPagination(
    Number(page),
    Number(perPage)
  );

  res.send(products);
};

export const getCount: Handler = async(req, res) => {
  const count = await productService.getCount();

  res.send({ count });
};

export const getOne: Handler = async(req, res) => {
  const { id } = req.params;

  const product = await productService.getById(Number(id));

  res.send(product);
};

export const getNew: Handler = async(req, res) => {
  const newProducts = await productService.getNew();

  res.send(newProducts);
};

export const getDiscounted: Handler = async(req, res) => {
  const discountedProducts = await productService.getDiscounted();

  res.send(discountedProducts);
};
