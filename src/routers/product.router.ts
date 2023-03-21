import express from 'express';
import * as productController from '../controllers/product.controller';

const router = express.Router();

router.get('/', productController.getAll);

router.get('/count', productController.getCount);
router.get('/new', productController.getNew);
router.get('/discount', productController.getDiscounted);

router.get('/:id', productController.getOne);
router.get('/:id/recommended', productController.getNew);

export default router;
