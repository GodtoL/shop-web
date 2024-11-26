const express = require('express')
const app = express()
app.use(express.json())
const Product = require('./models/Product')

require('./config/db')

app.get("/", async (req, res) => {
    //res.send("¡Bienvenidos gamers!")
    try{
        const products = await Product.find();
        res.status(200).send(products)
    } catch (error){
        console.error("Error al obtener productos", error)

    }
})

app.post("/add", async (req, res) => {
    try{
        const {title, price, imageUrl} = req.body;
        const newProduct = new Product({title, price, imageUrl})
        await newProduct.save();
        res.status(201).send("Cargado exitosamente");

    } catch (error){
        console.error("Error al obtener productos", error);
        res.status(500).send("Hubo un problema al intentar guardar");

    }
})

port = 3000
app.listen(port, () => {
    console.log("Servidor activo en puerto ",port)
})