import express from 'express';
import * as productController from '../controllers/product.controller';

const router = express.Router();

router.get('/', productController.getAll);
router.get('/count', productController.getCount);
router.get('/:id', productController.getOne);

export default router;
