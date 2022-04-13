const orderService = require("../services/order");

exports.checkoutdata= async function(checkoutdata){
    return await orderService.addorder(checkoutdata);
}
exports.get = async function(){
    return await orderService.get();
}