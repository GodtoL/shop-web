const express = require('express')
const app = express()
app.use(express.json())
require('./config/db')

const productRoutes = require('./routes/productRoutes')
app.use("/api/product", productRoutes)

port = 3000
app.listen(port, () => {
    console.log("Servidor activo en puerto ",port)
})