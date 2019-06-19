const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PRODUCTS = 'products';
const perPage = 7;

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
    mota: String,
    info: String,
    danhgia: String,
    help: String,
    comments:[{
        tenNguoiDanhgia:String,
        comment:String
    }]

}, { collection: PRODUCTS });

const list = mongoose.model(PRODUCTS, product);

const listProduct1value = async(req,cate ,imageOffer, banner, res) => {
    const listproduct = list;
    await listproduct.find({'phanloai':cate}).limit(perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/listProduct', { Product, imageOffer: imageOffer, banner: banner ,cate,  user: req.user});
        }
    })
}

const listProductWithPagination = async(req, res) => {
    const listproduct = list;
    const page = req.params.page;
    const cate = req.params.cate
    await listproduct.find({'phanloai':cate}).limit(perPage).skip((perPage*page)-perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.json(Product);
        }
    })
}


const searchProductWithPagination = async(req, res) => {
    const listproduct = list;
    const page = req.params.page;
    const cate = req.params.cate
    await listproduct.find({ten:new RegExp(cate)}).limit(perPage).skip((perPage*page)-perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.json(Product);
        }
    })
}

const searchProduct = async(req,text ,imageOffer, banner, res) => {
    const listproduct = list;
    await listproduct.find({ten:new RegExp(text)}).limit(perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/searchProduct', { Product, imageOffer: imageOffer, banner: banner ,text, user: req.user});
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

const addComment = async(req,res)=>{
    id = req.body.id;
    var newcomment = {tenNguoiDanhgia: req.body.nguoidanhgia,comment:req.body.comment}
    return await list.findByIdAndUpdate(id,{
        $push:{comments:newcomment}
    })
}


module.exports = {
    list                            :list,
    listProduct1value               :listProduct1value,
    viewProduct                     :viewProduct,
    searchProduct                   :searchProduct,
    searchProductWithKeywordJson    :searchProductWithKeywordJson,
    searchBrandJson                 :searchBrandJson,
    searchColorJson                 :searchColorJson,
    searchSizeJson                  :searchSizeJson,
    getProduct                      :getProduct,
    listProductWithPagination       :listProductWithPagination,
    searchProductWithPagination     :searchProductWithPagination,
    addComment                      :addComment
}

//module.exports.listProduct = listProduct;