const Cart = require('../../models/cart_model')
exports.addToCart = function(req,res){
    console.log(req.body.ten)
    res.redirect('/products/viewproduct/'+req.params.id);
}
exports.removeItem = async(req,res)=>{
    const user = req.user;
    const id = req.params.id;
    const removeItem = await Cart.RemoveItem(id,user);
    res.redirect('/cart/payment');
}