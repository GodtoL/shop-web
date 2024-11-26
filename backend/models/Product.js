const mongoose = require('mongoose')
const { Schema } = mongoose;

const productSchema = new Schema({
    name : String,
    price : Number,
    imageProduct: {
        type: String,  
        default: 'https://pressover.news/wp-content/uploads/2018/09/duckhunt1280-1523659245016.jpg',
        trim: true 
}})

