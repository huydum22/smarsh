const express = require('express');
const router = express.Router();
const passport = require('passport');
const user_controller = require('../Controllers/user/userController');
const { forwardAuthenticated } = require('../config/Auth/auth');


/* GET login page */
router.get('/login',forwardAuthenticated, user_controller.login_page);
router.post('/login', (req, res, next) => {
    passport.authenticate('local', { 
        failureRedirect: '/user/login',
        successRedirect:'/',
        failureFlash: true 
        })(req,res,next);
});

/* GET register page */
router.get('/register',user_controller.register_page);


router.post('/register',user_controller.addAccount);
/* GET profile page */
router.get('/profile/:id',user_controller.profile_page);


router.get('/logout', user_controller.logout_page);

router.get('/checkEmail',user_controller.checkEmail);

module.exports = router;