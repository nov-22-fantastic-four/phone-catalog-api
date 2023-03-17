import express from 'express';
import * as phonesController from '../controllers/phones.controller';

const router = express.Router();

router.get('/:phoneId', phonesController.getOne);

export default router;
