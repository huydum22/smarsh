var express = require('express');
var router = express.Router();

var products_controller = require('../Controllers/products/product_Controller');



/* Get Product Page */
router.get('/cloth', products_controller.cloth_List)
router.get('/men', products_controller.men_list);
router.get('/women', products_controller.women_list);
router.get('/kids', products_controller.kids_list);
router.get('/party', products_controller.party_list);
router.get('/casuals', products_controller.casuals_list);
router.get('/night', products_controller.night_list);
router.get('/formals', products_controller.formals_list);
router.get('/inner', products_controller.inner_list);
router.get('/cosmetics', products_controller.cos_list);
router.get('/deos', products_controller.deos_list);
router.get('/haircare', products_controller.hair_list);
router.get('/handbags', products_controller.hand_list);
router.get('/jewellery', products_controller.jewe_list);
router.get('/shoes', products_controller.shoes_list);
router.get('/skincare', products_controller.skin_list);
router.get('/watches', products_controller.watches_list);
/*GET info product page */
router.get('/:category/:id', products_controller.viewProduct)

router.get('/:cate/viewpage/:page', products_controller.cloth_List)
    /******************************* */
    /******************************* */
    /******************************* */

module.exports = router;