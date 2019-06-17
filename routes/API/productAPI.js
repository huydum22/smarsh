const express = require('express');
const router = express.Router();
const productAPIController = require('../../Controllers/API/productAPIcontroller');

router.get('/searchKeyword', productAPIController.searchList);
router.get('/searchBrand', productAPIController.searchBrand);
router.get('/searchColor', productAPIController.searchColor);
router.get('/searchSize', productAPIController.searchSize);
router.post('/addtocart',productAPIController.addToCart)
router.post('/addTotal',productAPIController.addTotal)
module.exports = router