const Product = require('../models/Product')

const getProducts = async(req, res) => {
    try{
        const products = await Product.find();
        res.status(200).send(products)
    } catch (error) {
        console.error("Error al obtener productos", error)
        res.status(404).json({message : "Hubo un error al intentar obtener productos"})
}}

const createProduct = async(req, res) => {
    const { title, price, imageProduct } = req.body;
    const newProduct = new Product({ title, price, imageProduct })
    try {
        await newProduct.save();
        res.status(201).send("Cargado exitosamente");
    } catch (error) {
        console.log("Error al crear ", error)
        res.status(500).json({message : "Hubo un error al intentar crear"})
    }
}

const updateProduct = async(req, res) => {
    const { id } = req.params;
    const { title, price, imageProduct } = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id, { $set : 
                { title , 
                price , 
                imageProduct}}, 
                { new : true })
        res.status(200).json({updatedProduct})
    } catch(error) {
        console.log("Error al actualizar ", error)
        res.status(500).json({message : "Hubo un error al intentar actualizar"})
    }
}

const deleteProduct = async(req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) {
            res.status.json({message : "Producto no encontrado"})
        }
        await Product.findByIdAndDelete(id)
        res.status(200).json({message : "Eliminado con exito"})
    } catch(error) {
        console.log("Error al intentar eliminar");
        res.status(500).json({message : "Error al intentar eliminar"})
    }
}

module.exports = { getProducts , createProduct, updateProduct, deleteProduct};