const express = require('express');
const router = express.Router();
const pay_controller = require('../Controllers/cart/payment_Controller');
const cart_controller = require('../Controllers/cart/cart_controller');

const { ensureAuthenticated } = require('../config/Auth/auth');



router.get('/', ensureAuthenticated,pay_controller.payment_page);
router.post('/',ensureAuthenticated, pay_controller.payment_page);
router.get('/checkout',ensureAuthenticated,pay_controller.checkOut_page)
router.get('/item/remove/:id',cart_controller.removeItem);

module.exports = router;