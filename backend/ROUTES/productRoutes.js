const express = require('express');
const router = express.Router();

const { addProduct, getProducts } = require('../CONTROLLERS/product.controller');

//add new product
router.post('/add',addProduct);

//get all products
router.get('/all',getProducts);

module.exports = router;