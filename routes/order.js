const express = require('express');
const router = express.Router();
const orderController = require('../Controllers/order/orderController');
const { ensureAuthenticated } = require('../config/Auth/auth');

router.get('/',ensureAuthenticated,orderController.saveOrder)
router.get('/myOrder',ensureAuthenticated,orderController.MyOrder);
router.get('/viewOrder/:id',ensureAuthenticated,orderController.viewOrder)
module.exports = router;
