import * as phoneService from '../services/phones.service';
import { type Handler } from 'express';

export const getAll: Handler = async(req, res) => {
  const { page = 1, perPage } = req.query;

  if (perPage === undefined) {
    const phones = await phoneService.getAll();

    return res.send(phones);
  }

  const phones = await phoneService.getWithPagination(
    Number(page),
    Number(perPage)
  );

  res.send(phones);
};

export const getOne: Handler = async(req, res) => {
  const { phoneId } = req.params;
  const phone = await phoneService.getById(phoneId);

  res.send(phone);
};
