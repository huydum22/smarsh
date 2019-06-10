var express = require('express');
var router = express.Router();
const { forwardAuthenticated } = require('../config/Auth/auth');
var about_controller = require('../Controllers/aboutController');
var contact_controller = require('../Controllers/contactController');
var faq_controller = require('../Controllers/faqController');
var pay_controller = require('../Controllers/paymentController');
var rec_controller = require('../Controllers/recommendedController');



/* GET home page. */
router.get('/', forwardAuthenticated,function(req, res, next) {
  if (req.isAuthenticated()) {
    res.render('index', { title: 'Express'});
  }
  else {
    res.render('index', { title: 'Chua dang nhap' });
  }
});

/******************************* */
/******************************* */
/******************************* */



/* GET about page */
router.get('/about', about_controller.about_page);

router.get('/contact', contact_controller.contact_Page);

router.get('/faq', faq_controller.Faq_page);

/******************************* */
/******************************* */
/******************************* */


/******************************* */
/******************************* */
/******************************* */


/* GET cart page */
router.get('/payment', pay_controller.payment_page);
router.get('/recommended', rec_controller.recommended_page);



/******************************* */
/******************************* */
/******************************* */


module.exports = router;
