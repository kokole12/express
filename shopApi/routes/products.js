import { getAllProducts, getAllProductsStatics, createProduct } from "../controllers/products.js";

import express from 'express'


export const router = express.Router()

router.route('/').get(getAllProducts).post(createProduct)
router.route('/static').get(getAllProductsStatics)
