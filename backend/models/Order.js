const mongoose = require('mongoose')
const { Schema } = mongoose;

const orderSchema = new Schema({
    quantity : Number,
    address : String
})

module.exports = mongoose.model('Order', orderSchema);