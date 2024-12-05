const { getProducts } = require('../controllers/productController')
const Order = require('../models/Order')

const manage = async(req, res) => {
    try {
        const products =  await getProducts();
        const orders = await getOrders();
        res.render("view_admin", { products, orders })
    } catch( error ) {
        console.error(error);
        res.status(500).send('Hubo un error al renderizar el administrador');  
    }
}
const getOrders = async(req, res) => {
    try{
        const orders = await Order.find();
        return orders
    } catch (error) {
        console.error("Error al obtener productos", error)
        res.status(404).json({message : "Hubo un error al intentar obtener productos"})
}}
module.exports = { manage }