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

const deleteOrder = async(req, res) => {
    const {id} = req.params
    try{
        console.log("el id ", id)
        const order = await Order.findOneAndDelete(id)
        console.log("el pedido ", order)
        if(!order){
            console.log("Error")
        }
        //wait Order.findByIdAndDelete(order.id)

    } catch(error) {
        console.log("error")
    }
}
module.exports = { manage, deleteOrder }