const express = require('express')
const app = express()
app.use(express.json())
const Product = require('./models/Product')
const { createProduct, getProducts } = require('./controllers/productController')

const router = express.Router();

require('./config/db')

app.get("/api/product", getProducts)

app.post("/api/product", createProduct)

port = 3000
app.listen(port, () => {
    console.log("Servidor activo en puerto ",port)
})