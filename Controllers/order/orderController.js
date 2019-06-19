const Order = require('../../models/order_model');

exports.saveOrder = async (req,res)=>{
    const user = req.user;
    return await Order.saveOrder(req,res,user)
}

exports.MyOrder = async(req,res)=>{
    return await Order.myOrderPage(req,res,req.user);
}

exports.viewOrder = async(req,res)=>{
    return await Order.viewOrder(req,res);
}