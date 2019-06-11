const product = require('../../models/product_model');
exports.getPage = (req, res) => {
    const listproduct = product.list;
    res.json(listproduct)
}