const product = require('../../models/product_model');
const Cart = require('../../models/cart_model')
exports.searchList = async (req, res) => {
    const jsonfile = product.searchProductWithKeywordJson(req.query.search, res);
    return jsonfile;
}
exports.searchBrand = async (req, res) => {
    const jsonfile = product.searchBrandJson(req.query.search, res);
    return jsonfile;
}
exports.searchColor = async (req, res) => {
    const jsonfile = product.searchColorJson(req.query.search, res);
    return jsonfile;
}
exports.searchSize = async (req, res) => {
    const jsonfile = product.searchSizeJson(req.query.search, res);
    return jsonfile;
}

exports.addToCart = async (req, res) => {
    const add = await  Cart.addToCart(req,res);
    res.send(add)
}
exports.addTotal = async (req,res)=>{
    const addTotal = await Cart.addTotal(req,res);
    res.send(addTotal);
}