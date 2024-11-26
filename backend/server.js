const express = require('express')
const app = express()
app.use(express.json())
const Product = require('./models/Product')
const { createProduct, getProducts, updateProduct } = require('./controllers/productController')

const router = express.Router();

require('./config/db')

app.get("/api/product", getProducts)

app.post("/api/product", createProduct)

app.put("/api/product/:id", updateProduct)

port = 3000
app.listen(port, () => {
    console.log("Servidor activo en puerto ",port)
})