const express = require('express')
const app = express()
app.use(express.json())
const productRoutes = require('./routes/productRoutes')

require('./config/db')

app.use("/api/product", productRoutes)

port = 3000
app.listen(port, () => {
    console.log("Servidor activo en puerto ",port)
})