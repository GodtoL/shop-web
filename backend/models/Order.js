const mongoose = require('mongoose')
const { Schema } = mongoose;

const orderSchema = new Schema({
    idProduct : String,
    name : String,
    quantity : Number,
    address : String
})

module.exports = mongoose.model('Order', orderSchema);