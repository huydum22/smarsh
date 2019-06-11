const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PRODUCTS = 'products';

const product = new Schema({
    ten: String,
    ma: String,
    gia: String,
    imgSrc: String,
    rate: String,
    loaisp: String,
    mausac: String,
    kichco: String,
    phanloai: String,
    row1: String,
    row2: String,
    row3: String,
    mota: String,
    info: String,
    danhgia: String,
    help: String,
    page: String,
    search:String

}, { collection: PRODUCTS });

const list = mongoose.model(PRODUCTS, product);
const perPage = 9;

const listProduct1value = async(cate,page ,imageOffer, banner, res) => {
    const listproduct = list;
    await listproduct.find({'phanloai':cate}).limit(perPage).skip((perPage*page)-perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/listProduct', { Product, imageOffer: imageOffer, banner: banner ,page,cate});
        }
    })
}
const searchProduct = async(text,page ,imageOffer, banner, res) => {
    const listproduct = list;
    await listproduct.find({ten:new RegExp(text)}).limit(perPage).skip((perPage*page)-perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/searchProduct', { Product, imageOffer: imageOffer, banner: banner ,page,text});
        }
    })
}
const viewProduct = async(res, id) => {
    const viewproduct = list;
    viewproduct.findById(id).then(productFound => {
        if (!productFound) {
            res.send('that bai');
        }
        res.render('viewProduct/single', { title: 'detail product', productFound })
    })
}


module.exports = {
    list: list,
    listProduct1value: listProduct1value,
    viewProduct: viewProduct,
    perPage:perPage,
    searchProduct:searchProduct
}

//module.exports.listProduct = listProduct;