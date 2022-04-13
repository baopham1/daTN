const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const orderSchema = new Schema({
    id: { type: ObjectId },
    address: { type: String },
    totalmoney: { type: Number },
    productQuantity: { type: Number },
    productArr:{type: Array},
});

module.exports = mongoose.model('order', orderSchema);