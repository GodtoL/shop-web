const mongoose = require('mongoose')
const { Schema } = mongoose;

const productSchema = new Schema({
    title : String,
    price : Number,
    imageProduct : {
        type : String,  
        default : 'https://pressover.news/wp-content/uploads/2018/09/duckhunt1280-1523659245016.jpg',
        trim : true 
}})

module.exports = mongoose.model('Product', productSchema);