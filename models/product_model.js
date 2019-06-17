const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PRODUCTS = 'products';

const product = new Schema({
    ten: String,
    ma: String,
    gia: String,
    imgSrc: String,
    nhasx: String,
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

const listProduct1value = async(req,cate,page ,imageOffer, banner, res) => {
    const listproduct = list;
    await listproduct.find({'phanloai':cate}).limit(perPage).skip((perPage*page)-perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/listProduct', { Product, imageOffer: imageOffer, banner: banner ,page,cate,  user: req.user});
        }
    })
}

const searchProduct = async(req,text,page ,imageOffer, banner, res) => {
    const listproduct = list;
    await listproduct.find({ten:new RegExp(text)}).limit(perPage).skip((perPage*page)-perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/searchProduct', { Product, imageOffer: imageOffer, banner: banner ,page,text, user: req.user});
        }
    })
}


const searchProductWithKeywordJson = async(text,res) => {
    const listproduct = list;
    await listproduct.find({ten:new RegExp(text)},function(err, Product)  {
        if (err){
            console.log('thatbai');
        }
        else{
            res.json(Product);
        }
    })
}
const searchBrandJson = async(text,res) => {
    const listproduct = list;
    await listproduct.find({nhasx:text},function(err, Product)  {
        if (err){
            console.log('thatbai');
        }
        else{
            res.json(Product);
        }
    })
}
const searchColorJson = async(text,res) => {
    const listproduct = list;
    await listproduct.find({mausac:text},function(err, Product)  {
        if (err){
            console.log('thatbai');
        }
        else{
            res.json(Product);
        }
    })
}
const searchSizeJson = async(text,res) => {
    const listproduct = list;
    await listproduct.find({kichco:text},function(err, Product)  {
        if (err){
            console.log('thatbai');
        }
        else{
            res.json(Product);
        }
    })
}

const getProduct = async (id) =>{
    return await list.findById(id);
}

const viewProduct = async(res,req, id) => {
    const viewproduct = list;
    viewproduct.findById(id).then(productFound => {
        if (!productFound) {
            res.send('that bai');
        }
        res.render('viewProduct/single', { title: 'detail product', productFound, user: req.user})
    })
}


module.exports = {
    list                            :list,
    listProduct1value               :listProduct1value,
    viewProduct                     :viewProduct,
    perPage                         :perPage,
    searchProduct                   :searchProduct,
    searchProductWithKeywordJson    :searchProductWithKeywordJson,
    searchBrandJson                 :searchBrandJson,
    searchColorJson                 :searchColorJson,
    searchSizeJson                  :searchSizeJson,
    getProduct                      :getProduct
}

//module.exports.listProduct = listProduct;