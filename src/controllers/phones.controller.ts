import * as phoneService from '../services/phones.service';
import { type Handler } from 'express';

export const getOne: Handler = async(req, res) => {
  const { phoneId } = req.params;
  const phone = await phoneService.getById(phoneId);

  res.send(phone);
};
