const mongoose = require('mongoose');
const ObjectId = require('mongoose').ObjectId;
var Schema = mongoose.Schema;

const CART = 'cart';


const cart = new Schema({
    _id: ObjectId,
    email: String,
    items: [{
        ten: String,
        idsanpham: String,
        soluong: String,
        gia: String,
        imgSrc:String
    }],
    tongtien: String,
    tongsoluong: String,
}, { collection: CART });


const listinCart = mongoose.model(CART, cart);


const init = async (req) => {
    const newitem = new listinCart({
        _id: req.body._id,
        tongtien: req.body.tongtien,
        tongsoluong: req.body.tongsoluong,
        email: req.body.email,
        items: [{
            idsanpham: req.body.idsanpham,
            ten: req.body.ten,
            gia: req.body.gia,
            soluong: req.body.soluong,
            imgSrc: req.body.imgSrc
        }]
    });
    return await newitem;
}
const checkUser = async (id) => {
    return await listinCart.findById(id)
};
const checkItem = async (mail, idsanpham) => {
    return listinCart.findOne({ 'email': mail, 'items.idsanpham': idsanpham });
}

const updateCart = async (id, req) => {
    var newItemInCart = {idsanpham: req.body.idsanpham,ten: req.body.ten,gia: req.body.gia,soluong: req.body.soluong, imgSrc: req.body.imgSrc}
    return await listinCart.findByIdAndUpdate(id, 
        { $push:{items:newItemInCart} })
}

const addValue = async (id ,value)=>{
    return await listinCart.findByIdAndUpdate(id,
        {$set: { tongtien: value}})
}
const addTotal = async (req,res)=>{
    const total = await addValue(req.body._id,req.body.total);
    var notification = 'success';
    if (total){
        res.json(notification)
    }
    else {
        notification = 'thatbai'
        res.json(notification);
    }
}
const removeitem = async(id,masp)=>{
    return await listinCart.findByIdAndUpdate(id,
        {$pull: { items:  {idsanpham : masp}}},{ multi: true }) }


const RemoveItem = async(idsanpham, user)=>{
    return await removeitem(user._id,idsanpham)
}

const addToCart = async (req, res) => {
    const checkU = await checkUser(req.body._id);
    var notification;
    if (checkU) {
        const existItem = await checkItem(req.body.email, req.body.idsanpham);
        if (existItem) {
            notification = 'Sản phẩm đã tồn tại trong giỏ hàng, xin vui lòng chọn sản phẩm khác';
            console.log(notification)
            res.json(notification)
        }
        else {
            const add = await updateCart(req.body._id, req);
            notification = 'Thêm sản phẩm vào giỏ hàng thành công'
            console.log(notification);
            res.json(notification)
        } 
    }
    else {
        notification = 'Thêm sản phẩm vào giỏ hàng thành công'
        console.log(notification)
        const newItem = await init(req);
        await newItem.save(err => { });
        res.json(notification)
    }
}

module.exports = {
    init: init,
    listinCart: listinCart,
    init: init,
    addToCart: addToCart,
    checkUser :checkUser,
    addTotal: addTotal,
    RemoveItem : RemoveItem
}



