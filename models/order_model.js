const mongoose = require('mongoose');
const Cart = require('./cart_model');

var Schema = mongoose.Schema;
let formatDate = new Date()
let currentDate = formatDate.getDate()+  "-" +(formatDate.getMonth() + 1) + "-" + formatDate.getFullYear();

const ORDER = 'order';
const Order = new Schema({
    idNguoimua: String,
    email: String,
    tenNguoiNhan:String,
    sdtNguoiNhan:String,
    diachiNguoiNhan:String,
    items: [{
        ten: String,
        idsanpham: String,
        soluong: String,
        gia: String,
        imgSrc:String
    }],
    ngaymua:{
        type:String,
        default:currentDate
    },
    status :{
        type:String,
        default:"Đã thanh toán"
    },
    tongtien: String,
}, { collection: ORDER });


const ListInOrder = mongoose.model(ORDER, Order);

const saveOrder = async (req,res,user)=>{
    var id = user._id;
    const Order =  new ListInOrder();
    const cart = await Cart.checkUserInCart(id);
    Order.tongtien = cart.tongtien;
    Order.idNguoimua = cart._id;
    Order.email = cart.email;
    Order.tenNguoiNhan = req.query.tenNguoiNhan;
    Order.sdtNguoiNhan = req.query.sdtNguoiNhan;
    Order.diachiNguoiNhan = req.query.diachiNguoiNhan;
    Order.items = cart.items;
    Order.save(err=>{});
    const deleteCart = await Cart.deleteUserInCart(id);
    res.redirect('/');
}

const myOrderPage = async(req,res,user)=>{
    var id = user._id;
    return await ListInOrder.find({idNguoimua:id}).exec((err,listOrder)=>{
        if (err){
            console.log('that bai');
        }
        else{
            res.render('Payment/myOrder',{title: 'Đơn hàng của tôi', user:req.user, listOrder})
        }
    })
}

const viewOrder = async(req,res)=>{
    const id = req.params.id
    return await ListInOrder.findById(id).exec((err,viewOrder)=>{
        if (err){
            console.log('that bai');
        }
        else{
            res.render('Payment/viewDetailOrder',{title: 'chi tiết đơn hàng', user:req.user, viewOrder})
        }
    })
}

module.exports = {
    ListInOrder : ListInOrder,
    saveOrder:saveOrder,
    myOrderPage:myOrderPage,
    viewOrder:viewOrder
}