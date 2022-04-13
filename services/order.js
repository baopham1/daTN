const orderModel = require('../models/OrderModel');

exports.get = async function(){
    
    return await orderModel.find();
}
exports.addorder = async function(checkoutdata){
    const order = new orderModel(checkoutdata);
    return await order.save();
}