const Product = require('../models/Product')

const getProducts = async(req, res) => {
    try{
    const products = await Product.find();
    res.status(200).send(products)
} catch (error){
    console.error("Error al obtener productos", error)

}}

const createProduct = async(req, res) => {
    try{
        const {title, price, imageUrl} = req.body;
        const newProduct = new Product({title, price, imageUrl})
        await newProduct.save();
        res.status(201).send("Cargado exitosamente");

    } catch (error){
        console.error("Error al obtener productos", error);
        res.status(500).send("Hubo un problema al intentar guardar");

    }
}

module.exports = { getProducts , createProduct};