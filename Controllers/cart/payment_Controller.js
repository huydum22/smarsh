const Cart = require('../../models/cart_model');
exports.payment_page = async (req, res) =>{
    const id = req.user._id;
    const cart = await Cart.checkUser(id)
    res.render('Payment/payment',{user: req.user, cart:cart});
};

